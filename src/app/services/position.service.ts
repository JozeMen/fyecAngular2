import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Position} from "../models/position";

@Injectable()
export class PositionService {

  constructor(private http: HttpClient, private router: Router) { }
  private positionUrl = 'http://localhost:8081/api/position';

  public getAllPositions() {
    return this.http.get<Position[]>(this.positionUrl);
  }
  public deletePosition(id: number) {
    return this.http.delete<Position>(this.positionUrl + "/" + id);
  }

  public createPosition(position_number: number, position_name: string) {
    return this.http.post<Position>(this.positionUrl , {
      position_number,
      position_name
    },{
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin": "*"

      })
    });
  }
  public editPosition(oldid: number, position_number: number, position_name: string) {
    return this.http.put<Position>(this.positionUrl +  "/" + oldid , {
      position_number,
      position_name
    },{
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin": "*"

      })
    });
  }

}
