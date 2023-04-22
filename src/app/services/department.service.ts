import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Department} from "../models/department";

@Injectable()
export class DepartmentService {

  constructor(private http: HttpClient, private router: Router) { }
  private departmentyUrl = 'http://localhost:8081/api/department';

  public getAllDepartments() {
    return this.http.get<Department[]>(this.departmentyUrl);
  }


}
