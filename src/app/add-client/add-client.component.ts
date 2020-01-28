import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Route } from '@angular/router';
import { Area } from '../shared/area';
import { AreaService } from '../services/area.service';
import { Client } from '../shared/client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  client: Client;
  areas: Area[];
   selectedOption = '';
   productionType = '0';
   talaak = '0';
  ranchForm: FormGroup;
  factoryForm: FormGroup;
  showRoomForm: FormGroup;
  doctorForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private areaService: AreaService,
              private clientService: ClientService) {}

  ngOnInit() {
    console.log(this.selectedOption);

    this.areaService.getAreas().subscribe(
        areas => this.areas = areas
    );
  }

  onSelect(val: any) {
    this.selectedOption = val;

     if (this.selectedOption === '1') {
       this.createRanchForm();
     }
     if (this.selectedOption === '2') {
        this.createFactoryForm();
     }
     if (this.selectedOption === '3') {
       this.createShowRoomForm();
     }
     if (this.selectedOption === '4') {
       this.createDoctorForm();
     }
  }

  onSelectProduction(val: any) {
    this.productionType = val;
    console.log(this.productionType);
  }

  onSelectTalaak(val: any) {
    this.talaak = val;
    console.log(this.talaak);
  }

  createRanchForm() {
    this.ranchForm = this.fb.group({
      name: '',
      phone: 0,
      areaId: '',
      image: '',
      manager: '',
      number: '', // number of animals in ranch
      kind: '', // kind of the animal
      age: '', // age of the animal
      weight: '', // weight of the animal
      production: '', // production of the ranch
      // if the ranch for milk
      milkPhase: '',
      quantity: '',
      // if the ranch for fatting
      fattingPhase: '',
      talaak: 0,
      talaakNum: 0,
      tNumber: 0,
      owner:'',
      mondator:''
    });
  }

  createFactoryForm() {
    this.factoryForm = this.fb.group({
      name: '',
      phone: 0,
      areaId: '',
      image: '',
      manager: '',
      kind: '', // production kind
      capacity: '', // production capacity
      mentor: ''
    });
  }
  createShowRoomForm() {
    this.showRoomForm = this.fb.group({
      name: '',
      phone: 0,
      areaId: '',
      image: '',
      manager: '',
      desc: ''
    });
  }

  createDoctorForm() {
    this.doctorForm = this.fb.group({
      name: '',
      phone: 0,
      areaId: '',
      image: '',
      manager: '',
      specialization: ''
    });
  }

  onSubmit() {
    const formData = new FormData();
    if (this.selectedOption === '1') {
        formData.append('companyKind', this.selectedOption);
        formData.append('name', this.ranchForm.get('name').value);
        formData.append('phone', this.ranchForm.get('phone').value);
        formData.append('areaId', this.ranchForm.get('areaId').value);
        formData.append('manager', this.ranchForm.get('manager').value);
        formData.append('number', this.ranchForm.get('number').value);
        formData.append('kind', this.ranchForm.get('kind').value);
        formData.append('age', this.ranchForm.get('age').value);
        formData.append('weight', this.ranchForm.get('weight').value);
        formData.append('production', this.ranchForm.get('production').value);
        formData.append('milkPhase', this.ranchForm.get('milkPhase').value);
        formData.append('quantity', this.ranchForm.get('quantity').value);
        formData.append('fattingPhase', this.ranchForm.get('fattingPhase').value);
        formData.append('talaak', this.ranchForm.get('talaak').value);
        formData.append('talaakNum', this.ranchForm.get('talaakNum').value);
        formData.append('tNumber', this.ranchForm.get('tNumber').value);
    }
    if (this.selectedOption === '2') {
        formData.append('companyKind', this.selectedOption);
        formData.append('name', this.factoryForm.get('name').value);
        formData.append('phone', this.factoryForm.get('phone').value);
        formData.append('areaId', this.factoryForm.get('areaId').value);
        formData.append('manager', this.factoryForm.get('manager').value);
        formData.append('kind', this.factoryForm.get('kind').value);
        formData.append('capacity', this.factoryForm.get('capacity').value);
        formData.append('mentor', this.factoryForm.get('mentor').value);
    }
    if  (this.selectedOption === '3') {
        formData.append('companyKind', this.selectedOption);
        formData.append('name', this.showRoomForm.get('name').value);
        formData.append('phone', this.showRoomForm.get('phone').value);
        formData.append('areaId', this.showRoomForm.get('areaId').value);
        formData.append('manager', this.showRoomForm.get('manager').value);
        formData.append('desc', this.showRoomForm.get('desc').value);
    }
    if  (this.selectedOption === '4') {
      formData.append('companyKind', this.selectedOption);
      formData.append('name', this.doctorForm.get('name').value);
      formData.append('phone', this.doctorForm.get('phone').value);
      formData.append('areaId', this.doctorForm.get('areaId').value);
      formData.append('manager', this.doctorForm.get('manager').value);
      formData.append('specialization', this.doctorForm.get('specialization').value);
  }

    this.clientService.addClient(formData).subscribe(
      (response) => {
          alert('تم اضافة عميل جديد الى قاعدة البيانات');
          console.log(response);
           this.router.navigate(['/clients']);
      },
      (error) => console.log(error)
  );

  }
}
