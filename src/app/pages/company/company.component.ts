import {Component, OnInit} from '@angular/core';
import {Company} from "../../models/company";
import {Router} from "@angular/router";
import {CompanyService} from "../../services/company.service";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit{
  companies!: Company[];
  selectedCompany!: Company;
  err: boolean = false;
   str!: string;

  constructor(private router: Router, private companyService: CompanyService) {
  }

  onSelect(company: Company) {

  }
  ngOnInit(): void {
    this.companyService.getAllCompanies().subscribe({
        next: (data) => {
          this.companies = data;
        },
        error: (err) => {
          this.err = true;
        }
      }
    );


  }

  createCompany(value: string){
    this.companyService.createCompany(this.str).subscribe({
      next: (data) => {}
    })
  }
}
