import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';

// services
import { ClientService } from './services/client.service';
import { EmployeeService } from './services/employee.service';
import { ModeratorService } from './services/moderator.service';
import { AreaService } from './services/area.service';
import { EditService } from './services/edit.service';
import { AuthService } from './services/auth.service';

// router module
import { AppRoutingModule } from './app-routing/app-routing.module';

// filter
import { FilterPipe } from './filter.pipe';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ClientFilterPipe } from './client-filter.pipe';
import { AreaComponent } from './area/area.component';
import { ModeratorsComponent } from './moderators/moderators.component';
import { EmployeeDetailsPipe } from './employee-details.pipe';
import { ClientDetailsPipe } from './client-details.pipe';
import { AddModeratorComponent } from './add-moderator/add-moderator.component';
import { AddClientComponent } from './add-client/add-client.component';
import { DatePipe } from './date.pipe';
import { VisitsComponent } from './visits/visits.component';
import { VisitsPipe } from './visits.pipe';
import { EditClientComponent } from './edit-client/edit-client.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { SingleDatePipe } from './single-date.pipe';
import { EditModeratorComponent } from './edit-moderator/edit-moderator.component';
import { EditAreaComponent } from './edit-area/edit-area.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EmployeeRateComponent } from './employee-rate/employee-rate.component';
import { EmployeeProductComponent } from './employee-product/employee-product.component';
import { TargetComponent } from './target/target.component';
import { AddtargetComponent } from './addtarget/addtarget.component';
import { RoadMapComponent } from './road-map/road-map.component';

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
    AddEmployeeComponent,
    ClientFilterPipe,
    AreaComponent,
    ModeratorsComponent,
    EmployeeDetailsPipe,
    ClientDetailsPipe,
    AddModeratorComponent,
    AddClientComponent,
    DatePipe,
    VisitsComponent,
    VisitsPipe,
    EditClientComponent,
    EditEmployeeComponent,
    SingleDatePipe,
    EditModeratorComponent,
    EditAreaComponent,
    LoginComponent,
    LogoutComponent,
    ProductsComponent,
    AddProductComponent,
    EmployeeRateComponent,
    EmployeeProductComponent,
    TargetComponent,
    AddtargetComponent,
    RoadMapComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
  ],
    providers: [
      ClientService,
      EmployeeService,
      ModeratorService,
      AreaService,
      EditService,
      AuthService,
      AuthGuard,
      {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
