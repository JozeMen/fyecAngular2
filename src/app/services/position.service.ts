import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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

}
