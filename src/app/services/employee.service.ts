import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay } from 'rxjs/operators';
import { EMPLOYEES } from '../shared/employees';
import { Employee } from '../shared/employee';
import { EmployeeDetails } from '../shared/employeeDetails';
import { EMPLOYEEDATA } from '../shared/employeeData';
import { Rate } from '../shared/rate';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    private employeesUrl = 'http://uac-animal.com/emp_Manage/ds-getEmployees.php';
    private employeeUrl = 'http://uac-animal.com/emp_Manage/ds-employeeDetails.php';
    private addEmployeeUrl = 'http://uac-animal.com/emp_Manage/ds-addEmployee.php';
    private deleteEmployeeUrl = 'http://uac-animal.com/emp_Manage/ds-deleteEmployee.php';
    private trashUrl = 'http://uac-animal.com/emp_Manage/ds-trashEmployees.php';
    private trackUrl = 'http://uac-animal.com/emp_Manage/funapi.php';

    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.employeesUrl);
    }

    getTrashEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.trashUrl);
    }

    getEmployee(id: string): Observable<EmployeeDetails> {
        return this.http.get<EmployeeDetails>(this.employeeUrl, { params: { emp_id: id } });
    }

    getTrack(formData: FormData) {
        return this.http.post<string>(this.trackUrl, formData);
    }
    saveEmployee(employee: Employee) {
        return this.http.post<Employee>(this.addEmployeeUrl, employee, httpOptions);
    }
    addEmployee(employee: FormData) {
        return this.http.post<any>(this.addEmployeeUrl, employee);
    }
    deleteEmployee(id: string) {
        return this.http.post<any>(this.deleteEmployeeUrl, id);
    }
 /////laravel
 showemployees(): Observable<object> {
    return this.http.get('http://laravel.uac-animal.com/api/employees');
}

addnewemployee(employee: Employee) {
return this.http.post('http://laravel.uac-animal.com/api/employees', employee);

}

showproduct(id:string , datefrom:string,dateto:string):Observable<object>
{
return this.http.get(`http://laravel.uac-animal.com/api/product/employee/${id}?dateFrom=${datefrom}&dateTo=${dateto}`);
}
showproductofemployee(id:string):Observable<object>
{
return this.http.get(`http://laravel.uac-animal.com/api/product/employee/${id}`);
}


addrate(rate:Rate):Observable<object>
{
return this.http.post('http://laravel.uac-animal.com/api/add/rate/employee',rate );
}

roadmap(id:string,from:string, to:string): Observable<object> {
    return this.http.get(`http://laravel.uac-animal.com/api/road/maps/${id}?dateFrom=${from}&dateTo=${to}`);
}

roadmapofemployee(id:string): Observable<object> {
    return this.http.get(`http://laravel.uac-animal.com/api/road/maps/${id}`);
}
//////////////
    constructor(private http: HttpClient) { }
}
