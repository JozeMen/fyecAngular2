import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {OperationComponent} from "./operation.component";
import {OperationService} from "../../services/operation.service";



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

  ],
  providers: [OperationService]
})
export class OperationModule { }
