import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Company} from "../models/company";

@Injectable()
export class CompanyService {

  constructor(private http: HttpClient, private router: Router) { }
  private companyUrl = 'http://localhost:8081/api/company';

  public getAllCompanies() {
    return this.http.get<Company[]>(this.companyUrl);
  }

  getGroupsById(name: string) {
    return this.http.get<Company>(this.companyUrl + "/" + name);
  }
  public createCompany(company: Company) {
    return this.http.post<Company>(this.companyUrl, company);
  }
  public deleteCompany(name: string) {
    return this.http.delete<Company>(this.companyUrl + "/" + name);
  }
}
