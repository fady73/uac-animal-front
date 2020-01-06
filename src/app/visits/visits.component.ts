import { Component, OnInit } from '@angular/core';
import { VisitsService } from '../services/visits.service';
import { Visit } from '../shared/visit';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.scss']
})
export class VisitsComponent implements OnInit {
  visits: Visit[];
  today = new Date().toISOString().split('T')[0];
  start = '';
  end = '';
  constructor(private visitService: VisitsService) { }

  ngOnInit() {
    this.visitService.getVisits().subscribe(
      visits => console.log(this.visits = visits)
    );
    console.log(this.today);
  }

  onDelete(id: string) {
    if (confirm('هل تريد الحذف نهائى؟ ')) {
      this.visits = this.visits.filter(
        visit => visit.id !== id
      );
      this.visitService.deleteVisit(id).subscribe(
          (response) => {
            console.log(response);
        },
        (error) => console.log(error)
      );
     }
  }
}
