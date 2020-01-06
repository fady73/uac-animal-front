import { Component, OnInit, ViewChild } from '@angular/core';
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

    @ViewChild('Aform') feedbackFormDirective;

    constructor(private areaService: AreaService,
         private fb: FormBuilder) {
        this.createForm();
    }

    ngOnInit() {
            this.areaService.getAreas().subscribe(areas => this.areas = areas);
      }

    createForm() {
        this.areaForm = this.fb.group({
            name: ['', Validators.required]
        });
    }

    onDelete(id: string) {
        if (confirm('هل تريد الحذف نهائى؟ ')) {
          this.areas = this.areas.filter(
            area => area.id !== id
          );
          this.areaService.deleteArea(id).subscribe(
              (response: any) => {
                console.log(response);
                // this.router.navigate(['/employees']);
            },
            (error: any) => console.log(error)
          );
         }
      }

    onSubmit() {
        const fd = new FormData;
        fd.append('name', this.areaForm.get('name').value);

        this.area = this.areaForm.value;
        this.areas.push(this.area);

        this.areaService.saveArea(fd).subscribe(
            (response) => {
                console.log(response);
                alert('تم اضافة منطقة جديدة');
            },
            (error) => console.log(error)
        );
        this.areaForm.reset({
            name: ''
        });
        this.feedbackFormDirective.reset();
    }
}
