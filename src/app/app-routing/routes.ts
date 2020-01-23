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
import { AddModeratorComponent } from '../add-moderator/add-moderator.component';
import { VisitsComponent } from '../visits/visits.component';
import { EditClientComponent } from '../edit-client/edit-client.component';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
import { EditModeratorComponent } from '../edit-moderator/edit-moderator.component';
import { EditAreaComponent } from '../edit-area/edit-area.component';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
import {ProductsComponent} from '../products/products.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { AuthGuard } from '../auth.guard';
import { EmployeeRateComponent } from '../employee-rate/employee-rate.component';
import { EmployeeProductComponent } from '../employee-product/employee-product.component';
import { TargetComponent } from '../target/target.component';
import { AddtargetComponent } from '../addtarget/addtarget.component';
import { RoadMapComponent } from '../road-map/road-map.component';
import { EmployeeofmoderatorsComponent } from '../employeeofmoderators/employeeofmoderators.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'clients', component: ClientsComponent, canActivate: [AuthGuard] },
    { path: 'employees', component: EmployeesComponent, canActivate: [AuthGuard] },
    { path: 'areas', component: AreaComponent, canActivate: [AuthGuard] },
    { path: 'editArea/:id', component: EditAreaComponent, canActivate: [AuthGuard]},
    { path: 'moderators', component: ModeratorsComponent, canActivate: [AuthGuard] },
    { path: 'addClient', component: AddClientComponent, canActivate: [AuthGuard] },
    { path: 'editClient/:id/:type', component: EditClientComponent, canActivate: [AuthGuard]},
    { path: 'addEmployee', component: AddEmployeeComponent, canActivate: [AuthGuard] },
    { path: 'editEmployee/:id', component: EditEmployeeComponent, canActivate: [AuthGuard] },
    { path: 'addModerator', component: AddModeratorComponent, canActivate: [AuthGuard] },
    { path: 'editModerator/:id', component: EditModeratorComponent, canActivate: [AuthGuard] },
    { path: 'visits', component: VisitsComponent, canActivate: [AuthGuard] },
    { path: 'clientdetails/:id', component: ClientDetailsComponent, canActivate: [AuthGuard] },
    { path: 'employeedetails/:id', component: EmployeeDetailsComponent, canActivate: [AuthGuard] },
    { path: 'employeeProduct/:id', component: EmployeeProductComponent, canActivate: [AuthGuard]},
    { path: 'employeeofmoderator/:id', component: EmployeeofmoderatorsComponent, canActivate: [AuthGuard]},
    { path: 'rate/:id', component: EmployeeRateComponent, canActivate: [AuthGuard]},
    { path: 'products', component: ProductsComponent, canActivate: [AuthGuard]},
    { path: 'target', component: TargetComponent, canActivate: [AuthGuard] },
    { path: 'addTarget', component: AddtargetComponent, canActivate: [AuthGuard] },
    { path: 'road/:id', component: RoadMapComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'addProduct', component: AddProductComponent, canActivate: [AuthGuard]},
    { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuard] }
];
