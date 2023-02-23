import { Component } from '@angular/core';
import { EmployeesService } from '../../../services/employees.service';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  employees: any;
  employees$: any;
  constructor(private employeeService:EmployeesService) {}

  ngOnInit(): void {
    this.employees$ = this.employeeService
      .getEmployees()
      .pipe(tap((data) => (this.employees = data)));
  }
}
