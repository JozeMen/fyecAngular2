import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {EmployeeComponent} from "./employee.component";
import {FormsModule} from "@angular/forms";
import {EmployeeService} from "../../services/employee.service";



@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeeComponent,
      },
    ]),
    FormsModule
  ],
  providers: [EmployeeService]
})
export class EmployeeModule { }
