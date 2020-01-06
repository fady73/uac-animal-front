import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router, Route } from '@angular/router';

import { Area } from '../shared/area';
import { AreaService } from '../services/area.service';
import { Moderator } from '../shared/moderator';
import { EditService } from '../services/edit.service';

@Component({
  selector: 'app-edit-moderator',
  templateUrl: './edit-moderator.component.html',
  styleUrls: ['./edit-moderator.component.scss']
})
export class EditModeratorComponent implements OnInit {

  areas: Area[];
  moderatorForm: FormGroup;
  moderator: Moderator;
  id: string;

  constructor(private areaService: AreaService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private editService: EditService) { }

  ngOnInit() {
    this.areaService.getAreas().subscribe(
      areas => this.areas = areas
    );

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.editService.fetchModerator(this.id)
      .subscribe(moderator => {
        console.log(moderator);
        this.moderator = moderator;
        this.createForm(this.moderator);
      });
    });

  }

  createForm(moderator: any) {
    this.moderatorForm = this.fb.group({
        name: moderator.name,
        username: moderator.username,
        phone: moderator.phone,
        password: moderator.password,
        area: moderator.area,
        trash: moderator.trash
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('id', this.id);
    formData.append('name', this.moderatorForm.get('name').value);
    formData.append('username', this.moderatorForm.get('username').value);
    formData.append('phone', this.moderatorForm.get('phone').value);
    formData.append('password', this.moderatorForm.get('password').value);
    formData.append('area', this.moderatorForm.get('area').value);
    formData.append('trash', this.moderatorForm.get('trash').value);

    this.editService.updateModerator(formData).subscribe(
        (response) => {
            alert('تم تعديل بيانات مدير المنطقة');
            console.log(response);
             this.router.navigate(['/moderators']);
        },
        (error) => {
          console.log(error);
          alert('خطا فى تعديل البيانات');
        }
    );
}

}
