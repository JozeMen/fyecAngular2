import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {CompanyComponent} from "./company.component";
import {FormsModule} from "@angular/forms";
import {CompanyService} from "../../services/company.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CompanyComponent,
      },
    ]),
    FormsModule
  ],
  providers: [CompanyService]
})
export class CompanyModule { }
