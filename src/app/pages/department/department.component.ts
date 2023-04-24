import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DepartmentService} from "../../services/department.service";
import {Department} from "../../models/department";
import {Company} from "../../models/company";
import {CompanyService} from "../../services/company.service";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments!: Department[]
  department!: Department
  isReadyToDelete :boolean = false;
  err: boolean = false;
  department_nameIsReadable: boolean = false;
  newDepartmentName!: string;
  newDepartmentAddress!: string;
  newPhoneNumber!: string;
  companyName!: string;
  companies!: Company[]

  constructor(private router: Router, private departmentService: DepartmentService, private companyService: CompanyService) {
  }


  onSelect(company: Company) {

  }

  ngOnInit(): void {
    this.departmentService.getAllDepartments().subscribe({
        next: (data) => {
          this.departments = data;
        },
        error: (err) => {
          this.err = true;
        }
      }
    );
      this.companyService.getAllCompanies().subscribe({
          next: (data) => {
            this.companies = data;
          },
          error: (err) => {
            this.err = true;
          }
        }
      );

    // getDepartmetCompany(value: string) {
    //
    // }

    //TODO: сделать поиск компании
  }

  deleteDepartment(value: string) {
    this.departmentService.deleteDepartment(value).subscribe({
      next:(data) => {}
    })
  }

  createDepartment(name: string, value: string, value1: string, value3: string) {
    this.departmentService.createDepartment(name, value, value1, value3).subscribe({
      next: (data) => {}
    })
  }

}
