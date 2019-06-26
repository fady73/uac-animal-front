import { Injectable } from '@angular/core';
import { EMPLOYEES } from '../shared/employees';
import { Employee } from '../shared/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    getEmployees(): Employee[] {
        return EMPLOYEES;
    }

  constructor() { }
}
