import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  constructor(private _http:HttpClient) { }

  getEmployees() {
    return this._http.get('/api/employees')
  }

  registerEmployee(data: any) {
    return this._http.post('/api/employees', data)
  }

  adminLogin(data:any) {
    return this._http.post('/api/employees/login', data)
  }
}
