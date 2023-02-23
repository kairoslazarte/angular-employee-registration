import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeRegFormComponent } from './components/forms/employee-reg-form/employee-reg-form.component';
import { EmployeeComponent } from './components/screens/employee/employee.component';
import { AdminComponent } from './components/screens/admin/admin.component';
import { AdminLoginFormComponent } from './components/forms/admin-login-form/admin-login-form.component';
import { FormsModule } from "@angular/forms";
import { AdminSidebarComponent } from './components/sidebar/admin-sidebar/admin-sidebar.component'

const appRoutes : Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'admin-login', component: AdminLoginFormComponent },
  { path: 'admin', component: sessionStorage.getItem('admin') ? AdminComponent : AdminLoginFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegFormComponent,
    EmployeeComponent,
    AdminComponent,
    AdminLoginFormComponent,
    AdminSidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
