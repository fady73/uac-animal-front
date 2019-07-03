import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { EMPLOYEES } from '../shared/employees';
import { Employee } from '../shared/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    getEmployees(): Observable<Employee[]> {
        return of(EMPLOYEES).pipe(delay(2000));
    }

    getEmployee(id: string): Observable<Employee> {
        return of(EMPLOYEES.filter((employee) => (employee.id === id))[0]).pipe(delay(2000));
    }
  constructor() { }
}
