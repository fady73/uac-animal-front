import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';

//services
import { ClientService } from './services/client.service';
import { EmployeeService } from './services/employee.service';

//router module
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientsComponent,
    ClientDetailsComponent,
    EmployeesComponent,
    EmployeeDetailsComponent,
    HomeComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule
  ],
    providers: [ClientService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
