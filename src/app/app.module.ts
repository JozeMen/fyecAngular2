import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {HomeModule} from "./pages/home/home.module";
import { CompanyComponent } from './pages/company/company.component';
import { DepartmentComponent } from './pages/department/department.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //MenuModule,
    HttpClientModule,
    HomeModule,
    FormsModule,
    //BodyModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
