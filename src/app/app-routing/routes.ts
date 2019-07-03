import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ClientsComponent } from '../clients/clients.component';
import { EmployeesComponent } from '../employees/employees.component';
import { ClientDetailsComponent } from '../client-details/client-details.component';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { AddClientComponent } from '../add-client/add-client.component';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { AreaComponent } from '../area/area.component';
import { ModeratorsComponent } from '../moderators/moderators.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'employees', component: EmployeesComponent },
    { path: 'areas', component: AreaComponent },
    { path: 'moderators', component: ModeratorsComponent },
    { path: 'addClient', component: AddClientComponent },
    { path: 'addEmployee', component: AddEmployeeComponent },
    { path: 'clientdetails/:id', component: ClientDetailsComponent },
    { path: 'employeedetails/:id', component: EmployeeDetailsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];