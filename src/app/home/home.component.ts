import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../services/statistics.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  employeesNum: string;
  clientsNum: string;
  visitsNum: string;

  constructor(private stats: StatisticsService) { }

  ngOnInit() {
    this.stats.getClientsNum().subscribe((clients) => this.clientsNum = clients);
    this.stats.getEmployeesNum().subscribe((employees) => this.employeesNum = employees);
    this.stats.getVisitsNum().subscribe((visits) => this.visitsNum = visits);
  }

}
