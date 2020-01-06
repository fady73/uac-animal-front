import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router, Route } from '@angular/router';
import { Area } from '../shared/area';
import { AreaService } from '../services/area.service';
import { Client } from '../shared/client';
import { ClientService } from '../services/client.service';
import { EditService } from '../services/edit.service';


@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {

  client: Client;
  companyType: string;
  id: string;
  areas: Area[];
  ranchForm: FormGroup;
  factoryForm: FormGroup;
  showRoomForm: FormGroup;
  doctorForm: FormGroup;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private areaService: AreaService,
    private editService: EditService) { }

  ngOnInit() {
    this.areaService.getAreas().subscribe(
      areas => this.areas = areas
    );

    this.route.paramMap.subscribe(params => {
      this.companyType = params.get('type');
      this.id = params.get('id');
      this.editService.fetchClient(this.id).subscribe(
        client => {
          this.client = client;
          if (this.companyType === 'مزرعة') {
            this.createRanchForm(this.client);
          } else if (this.companyType === 'مصنع') {
              this.createFactoryForm(this.client);
          } else if (this.companyType === 'معرض') {
            this.createShowRoomForm(this.client);
          } else if (this.companyType === 'دكتور') {
            this.createDoctorForm(this.client);
          }
        });
    });
  }

  createRanchForm(client: any) {
    console.log(client);
    this.ranchForm = this.fb.group({
      name: client.name,
      phone: client.phone,
      areaId: client.area,
      manager: client.manager,
      number: client.ranch.number, // number of animals in ranch
      kind: client.ranch.kind, // kind of the animal
      age: client.ranch.age, // age of the animal
      weight: client.ranch.weight, // weight of the animal
      production: client.ranch.production, // production of the ranch
      trash: client.trash
    });
  }

  createFactoryForm(client: any) {
    console.log(client);
    this.factoryForm = this.fb.group({
      name: client.name,
      phone: client.phone,
      areaId: client.area,
      manager: client.manager,
      kind: client.factory.productionKind, // production kind
      capacity: client.factory.capacity, // production capacity
      mentor: client.factory.menitor,
      trash: client.trash
    });
  }

  createShowRoomForm(client: any) {
    console.log(client);
    this.showRoomForm = this.fb.group({
      name: client.name,
      phone: client.phone,
      areaId: client.area,
      manager: client.manager,
      desc: client.showroom.desc,
      trash: client.trash
    });
  }

  createDoctorForm(client: any) {
    console.log(client);
    this.doctorForm = this.fb.group({
      name: client.name,
      phone: client.phone,
      areaId: client.area,
      manager: client.manager,
      specialization: client.doctor.specialization,
      trash: client.trash
    });
  }


  onSubmit() {
      const formData = new FormData();
      if (this.companyType === 'مزرعة') {
         console.log(this.id);
         formData.append('companyId', this.id);
          formData.append('companyKind', '1');
          formData.append('name', this.ranchForm.get('name').value);
          formData.append('phone', this.ranchForm.get('phone').value);
          formData.append('areaId', this.ranchForm.get('areaId').value);
          formData.append('manager', this.ranchForm.get('manager').value);
          formData.append('number', this.ranchForm.get('number').value);
          formData.append('kind', this.ranchForm.get('kind').value);
          formData.append('age', this.ranchForm.get('age').value);
          formData.append('weight', this.ranchForm.get('weight').value);
          formData.append('production', this.ranchForm.get('production').value);
          formData.append('trash', this.ranchForm.get('trash').value);
        }
      if (this.companyType === 'مصنع') {
        console.log(this.id);
        formData.append('companyId', this.id);
          formData.append('companyKind', '2');
          formData.append('name', this.factoryForm.get('name').value);
          formData.append('phone', this.factoryForm.get('phone').value);
          formData.append('areaId', this.factoryForm.get('areaId').value);
          formData.append('manager', this.factoryForm.get('manager').value);
          formData.append('kind', this.factoryForm.get('kind').value);
          formData.append('capacity', this.factoryForm.get('capacity').value);
          formData.append('mentor', this.factoryForm.get('mentor').value);
          formData.append('trash', this.factoryForm.get('trash').value);
        }
      if  (this.companyType === 'معرض') {
        console.log(this.id);
        formData.append('companyId', this.id);
          formData.append('companyKind', '3');
          formData.append('name', this.showRoomForm.get('name').value);
          formData.append('phone', this.showRoomForm.get('phone').value);
          formData.append('areaId', this.showRoomForm.get('areaId').value);
          formData.append('manager', this.showRoomForm.get('manager').value);
          formData.append('desc', this.showRoomForm.get('desc').value);
          formData.append('trash', this.showRoomForm.get('trash').value);
        }
      if  (this.companyType === 'دكتور') {
        console.log(this.id);
        formData.append('companyId', this.id);
        formData.append('companyKind', '4');
        formData.append('name', this.doctorForm.get('name').value);
        formData.append('phone', this.doctorForm.get('phone').value);
        formData.append('areaId', this.doctorForm.get('areaId').value);
        formData.append('manager', this.doctorForm.get('manager').value);
        formData.append('specialization', this.doctorForm.get('specialization').value);
        formData.append('trash', this.doctorForm.get('trash').value);
      }

      this.editService.updateClient(formData).subscribe(
        (response) => {
            alert('تم تعديل بيانات العميل فى قاعدة البيانات');
            console.log(response);
            this.router.navigate(['/clients']);
        },
        (error) => console.log(error)
    );
  }
}
