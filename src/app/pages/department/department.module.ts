import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DepartmentComponent} from "./department.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {DepartmentService} from "../../services/department.service";
import {EmployeeComponent} from "../employee/employee.component";
import {CompanyService} from "../../services/company.service";



@NgModule({
  declarations: [
    DepartmentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DepartmentComponent
      },
    ]),
    FormsModule
  ],
  providers: [DepartmentService, CompanyService]

})
export class DepartmentModule { }
