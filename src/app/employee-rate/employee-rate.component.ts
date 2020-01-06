import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Rate } from '../shared/rate';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-rate',
  templateUrl: './employee-rate.component.html',
  styleUrls: ['./employee-rate.component.scss']
})
export class EmployeeRateComponent implements OnInit {

  id:string
  rateForm: FormGroup;
 rate:Rate=new Rate();
  constructor(private Service: EmployeeService  , private fb: FormBuilder  , private route: ActivatedRoute , private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  this.createForm();
  }

  createForm() {
    this.rateForm = this.fb.group({
      rate:'',
    
    });
  }

  
  onSubmit() {

this.rate.employee_id=parseInt(this.id);
this.rate.rate=this.rateForm.get('rate').value;
this.rate.company_id=1;

    this.Service.addrate(this.rate).subscribe(
        (response) => {
          alert('تم اضافة تقييم جديد');
            console.log(response);
            this.router.navigate(['/employees']);
         },
      (error) => console.log(error)
    );
  }

}
