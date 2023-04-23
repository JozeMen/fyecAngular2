import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {PositionService} from "../../services/position.service";
import {PositionComponent} from "./position.component";



@NgModule({
  declarations: [PositionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PositionComponent
      },
    ]),
    FormsModule
  ],
  providers: [PositionService]

})
export class PositionModule { }
