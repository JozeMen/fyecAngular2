import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {OperationComponent} from "./operation.component";
import {OperationService} from "../../services/operation.service";
import {EmployeeService} from "../../services/employee.service";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [OperationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OperationComponent
      },
    ]),
    FormsModule,
  ],
  providers: [OperationService, EmployeeService]
})
export class OperationModule { }
