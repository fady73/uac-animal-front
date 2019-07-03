import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AreaService } from '../services/area.service';
import { Area } from '../shared/area';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
    areas: Area[];
    areaForm: FormGroup;
    area: Area;

    constructor(private areaService: AreaService, private fb: FormBuilder) {
        this.createForm();
    }

    ngOnInit() {

        this.areaService.getAreas().subscribe(areas => this.areas = areas);
      }

    createForm() {
        this.areaForm = this.fb.group({
            id: '',
            name: ''
        });
    }

    onSubmit() {
        this.area = this.areaForm.value;
        console.log(this.area);
        this.areas.push(this.area);
        this.areaForm.reset();
    }
}
