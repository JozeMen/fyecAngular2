import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Position} from "../models/position";
import {Operation} from "../models/operation";

@Injectable()
export class OperationService {

  constructor(private http: HttpClient, private router: Router) { }

  private operationUrl = 'http://localhost:8081/api/operation';

  public getAllOperation() {
    return this.http.get<Operation[]>(this.operationUrl);
  }
  public deleteOperation(id: number) {
    return this.http.delete<Operation>(this.operationUrl + "/" + id);
  }

  public createOperation(id: number, operationNumber: number, operationDate: Date, description: string ) {
    return this.http.post<Operation>(this.operationUrl + "/" + id, {
      operationNumber,
      operationDate,
      description
      },{
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin": "*"

      })
    });
  }

}
