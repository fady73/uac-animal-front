import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router, Route } from '@angular/router';

import { Employee } from '../shared/employee';
import { Area } from '../shared/area';
import { AreaService } from '../services/area.service';
import { Moderator } from '../shared/moderator';
import { ModeratorService } from '../services/moderator.service';
import { EditService } from '../services/edit.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  areas: Area[];
  employeeForm: FormGroup;
  employee: Employee;
  id: string;
  moderators: Moderator[];

  constructor(private areaService: AreaService,
      private fb: FormBuilder,
      private moderatorService: ModeratorService,
      private route: ActivatedRoute,
      private router: Router,
      private editService: EditService) {
  }

  ngOnInit() {
      this.areaService.getAreas().subscribe(
          areas => this.areas = areas
      );
      this.moderatorService.getModerators().subscribe(
          moderators => this.moderators = moderators
      );
      this.route.paramMap.subscribe(params => {
        this.id = params.get('id');
        this.editService.fetchEmployee(this.id)
        .subscribe(employee => {
          console.log(employee);
          this.employee = employee;
          this.createForm(this.employee);
        });
      });
  }

  createForm(employee: any) {
      this.employeeForm = this.fb.group({
          name: employee.name,
          username: employee.username,
          phone: employee.phone,
          password: employee.password,
          area: employee.area,
          moderator: employee.moderator,
          trash: employee.trash
      });
  }

  onSubmit() {
      const formData = new FormData();
      formData.append('id', this.id);
      formData.append('name', this.employeeForm.get('name').value);
      formData.append('username', this.employeeForm.get('username').value);
      formData.append('phone', this.employeeForm.get('phone').value);
      formData.append('password', this.employeeForm.get('password').value);
      formData.append('area', this.employeeForm.get('area').value);
      formData.append('moderator', this.employeeForm.get('moderator').value);
      formData.append('trash', this.employeeForm.get('trash').value);

      this.editService.updateEmployee(formData).subscribe(
          (response) => {
              alert('تم تعديل بيانات المندوب');
              console.log(response);
               this.router.navigate(['/employees']);
          },
          (error) => {
            console.log(error);
            alert('خطا فى تعديل البيانات');
          }
      );
  }

}
