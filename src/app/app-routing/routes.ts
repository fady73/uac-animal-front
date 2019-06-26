import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ClientsComponent } from '../clients/clients.component';
import { EmployeesComponent } from '../employees/employees.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'employees', component: EmployeesComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];