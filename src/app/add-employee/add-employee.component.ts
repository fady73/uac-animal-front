import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Employee } from '../shared/employee';
import { EmployeeService } from '../services/employee.service';
import { Area } from '../shared/area';
import { AreaService } from '../services/area.service';
import { Moderator } from '../shared/moderator';
import { ModeratorService } from '../services/moderator.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
    areas: Area[];
    employeeForm: FormGroup;
    employee: Employee;
    moderators: Moderator[];

    constructor(private areaService: AreaService,
        private fb: FormBuilder,
        private employeeService: EmployeeService,
        private moderatorService: ModeratorService,
        private router: Router) {
        this.createForm();
    }

    createForm() {
        this.employeeForm = this.fb.group({
            name: '',
            username: '',
            phone: '',
            password: '',
            area: 0,
            // avater: [''],
            moderator: ''
        });
    }

    ngOnInit() {
        this.areaService.getAreas().subscribe(
            areas => this.areas = areas
        );
        this.moderatorService.getModerators().subscribe(
            moderators => { this.moderators = moderators["data"]}
        );
    }

    onFileSelected(event) {
        const selectedFile = event.target.files[0];
        // this.employeeForm.get('avater').setValue(selectedFile);
        console.log(selectedFile);

    }

    onSubmit() {
        const formData = new FormData();
        //  formData.append('avater', this.employeeForm.get('avater').value);
        formData.append('name', this.employeeForm.get('name').value);
        formData.append('username', this.employeeForm.get('username').value);
        formData.append('phone', this.employeeForm.get('phone').value);
        formData.append('password', this.employeeForm.get('password').value);
        formData.append('area', this.employeeForm.get('area').value);
        formData.append('moderator', this.employeeForm.get('moderator').value);


        this.employee = this.employeeForm.value;

        this.employee = this.employeeForm.value;
    //    this.employee.moderator="31"
         console.log(this.employee);

         this.employeeService.addnewemployee(this.employee).subscribe(
            data => {
                console.log(data);
                if (data["status"]=="success") {
                    alert('تم اضافة مندوب جديد الى قاعدة البيانات');
                  this.router.navigate(['/employees']);
                      
                    }
                else {
                    alert(' خطا فى البيانات');
           }
               
            },
            (error) => console.log(error)
        );
        // console.log(this.employee);
        // this.employeeService.addEmployee(formData).subscribe(
        //     (response) => {
        //         console.log(response);
        //         if (response.success === true) {
        //             alert('تم اضافة مندوب جديد الى قاعدة البيانات');
        //          this.router.navigate(['/employees']);
        //         } else {
        //             alert(response.msg + ' خطا فى البيانات');
        //         }
        //     },
        //     (error) => console.log(error)
        // );
        // this.employeeForm.reset();
    }

}
