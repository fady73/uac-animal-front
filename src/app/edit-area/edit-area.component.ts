import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router, Route } from '@angular/router';

import { Area } from '../shared/area';
import { EditService } from '../services/edit.service';

@Component({
  selector: 'app-edit-area',
  templateUrl: './edit-area.component.html',
  styleUrls: ['./edit-area.component.scss']
})
export class EditAreaComponent implements OnInit {
  area: Area;
  areaForm: FormGroup;
  id: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private editService: EditService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.editService.fetchArea(this.id)
      .subscribe(area => {
        console.log(area);
        this.area = area;
        this.createForm(this.area);
      });
    });
  }

  createForm(area: any) {
    this.areaForm = this.fb.group({
        name: area.name
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('id', this.id);
    formData.append('name', this.areaForm.get('name').value);

    this.editService.updateArea(formData).subscribe(
        (response) => {
            alert('تم تعديل بيانات المنطقة');
            console.log(response);
             this.router.navigate(['/areas']);
        },
        (error) => {
          console.log(error);
          alert('خطا فى تعديل البيانات');
        }
    );
}
}
