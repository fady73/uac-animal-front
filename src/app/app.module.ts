import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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

//filter
import { FilterPipe } from './filter.pipe';
import { AddClientComponent } from './add-client/add-client.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ClientFilterPipe } from './client-filter.pipe';
import { AreaComponent } from './area/area.component';
import { ModeratorsComponent } from './moderators/moderators.component';
import { EmployeeDetailsPipe } from './employee-details.pipe';
import { ClientDetailsPipe } from './client-details.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientsComponent,
    ClientDetailsComponent,
    EmployeesComponent,
    EmployeeDetailsComponent,
    HomeComponent,
    FilterPipe,
    AddClientComponent,
    AddEmployeeComponent,
    ClientFilterPipe,
    AreaComponent,
    ModeratorsComponent,
    EmployeeDetailsPipe,
    ClientDetailsPipe
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
  ],
    providers: [ClientService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
