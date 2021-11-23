import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Employee } from './employee';
import { Loginemployee } from './login/loginemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  url = "http://localhost:55509/";


  constructor(private http: HttpClient) { }

  createemployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url + 'api/Employeemasters', employee)
  }

  loginemployee(loginEmployee: Loginemployee): Observable<Employee> {
    return this.http.post<Employee>(this.url + 'api/Login', loginEmployee)
  }
}
