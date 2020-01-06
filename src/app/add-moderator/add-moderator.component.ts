import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Area } from '../shared/area';
import { AreaService } from '../services/area.service';
import { Moderator } from '../shared/moderator';
import { ModeratorService } from '../services/moderator.service';

@Component({
  selector: 'app-add-moderator',
  templateUrl: './add-moderator.component.html',
  styleUrls: ['./add-moderator.component.scss']
})
export class AddModeratorComponent implements OnInit {
  areas: Area[];
  moderator: Moderator;
  addModeratorForm: FormGroup;

  constructor(private areaService: AreaService,
     private fb: FormBuilder,
     private moderatorService: ModeratorService,
     private router: Router) { }

  ngOnInit() {
    this.areaService.getAreas().subscribe(
      areas => this.areas = areas
    );
    this.createForm();
  }

  createForm() {
    this.addModeratorForm = this.fb.group({
      name: '',
      username: '',
      phone: '',
      password: '',
      area: 0
    });
  }

  onSubmit() {
    this.moderator = this.addModeratorForm.value;

    const formData = new FormData();
    formData.append('name', this.addModeratorForm.get('name').value);
    formData.append('username', this.addModeratorForm.get('username').value);
    formData.append('phone', this.addModeratorForm.get('phone').value);
    formData.append('password', this.addModeratorForm.get('password').value);
    formData.append('area', this.addModeratorForm.get('area').value);

    this.moderatorService.addModerator(formData).subscribe(
      (response) => {
        console.log(response);
        if (response.success === true) {
          alert('تم اضافة مدير منطقة الى قاعة البيانات');
          this.router.navigate(['/moderators']);
        } else {
          alert('خطا فى اضافة البيانات');
        }
      },
      (error) => console.log(error)
  );

    this.addModeratorForm.reset();
  }
}
