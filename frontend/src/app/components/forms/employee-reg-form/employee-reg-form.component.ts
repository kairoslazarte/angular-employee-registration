import { Component } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-reg-form',
  templateUrl: './employee-reg-form.component.html',
  styleUrls: ['./employee-reg-form.component.css']
})
export class EmployeeRegFormComponent {
  employees: any;
  constructor(private employeeService:EmployeesService) {}

  getEmployeesFormData(data: any) 
  {
    console.warn(data)
    this.employeeService.registerEmployee(data).subscribe((result) => {
      console.warn(result)
    })
  }
}
