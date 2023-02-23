import { Component } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-admin-login-form',
  templateUrl: './admin-login-form.component.html',
  styleUrls: ['./admin-login-form.component.css']
})

export class AdminLoginFormComponent {
  admin: any;
  constructor(private employeeService:EmployeesService) {}

  loginAdminForm(data: any) {
    console.warn(data)
    this.employeeService.adminLogin(data).subscribe((result) => {
      sessionStorage.setItem('admin', JSON.stringify(result))
      window.location.href = '/admin'
    })
  }
}