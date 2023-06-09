import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Employee} from "../models/employee";
import {Company} from "../models/company";

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient, private router: Router) {
  }

  private employeeUrl = 'http://localhost:8081/api/employee';

  public getAllEmployees() {
    return this.http.get<Employee[]>(this.employeeUrl);
  }

  public deleteEmployee(id: number) {
    return this.http.delete<Employee>(this.employeeUrl + "/" + id);
  }

  public createEmployee(name: string, id: number, fio: string, phoneNumber: string) {
    return this.http.post<Employee>(this.employeeUrl + "/" + name, {
        id,
        fio,
        phoneNumber
      },
      {
        headers: new HttpHeaders({
          "Access-Control-Allow-Origin": "*"

        })
      }
    )
  }
  public editEmployee(id1: number, id: number, fio: string, phoneNumber: string) {
    return this.http.put<Employee>(this.employeeUrl + "/" + id1, {
        id,
        fio,
        phoneNumber
      },
      {
        headers: new HttpHeaders({
          "Access-Control-Allow-Origin": "*"

        })
      }
    )
  }
}
