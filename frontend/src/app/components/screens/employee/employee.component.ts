import { Component } from '@angular/core';
import { EmployeesService } from '../../../services/employees.service';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent {
  employees: any;
  employees$: any;
  constructor(private employeeService:EmployeesService) {}

  ngOnInit(): void {
    this.employees$ = this.employeeService
      .getEmployees()
      .pipe(tap((data) => (this.employees = data)));
  }
}
