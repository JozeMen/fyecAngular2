import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Department} from "../models/department";
import {Company} from "../models/company";

@Injectable()
export class DepartmentService {

  constructor(private http: HttpClient, private router: Router) { }
  private departmentyUrl = 'http://localhost:8081/api/department';

  public getAllDepartments() {
    return this.http.get<Department[]>(this.departmentyUrl);
  }

  // public getDepartmetCompany(value: string) {
  //   this.http.get<Company>
  // }

  public deleteDepartment(value:string ) {
    return this.http.delete<Department>(this.departmentyUrl + "/" + value);
  }

  public createDepartment(name: string, departmentName: string,phoneNumber: string , departmentAddress: string ) {
    return this.http.post<Department>(this.departmentyUrl + "/" + name, {
      departmentName,
      phoneNumber,
      departmentAddress

    },{
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin": "*"

      })
    });
  }


}
