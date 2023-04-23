import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DepartmentService} from "../../services/department.service";
import {Department} from "../../models/department";
import {Company} from "../../models/company";

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

  constructor(private router: Router, private departmentService: DepartmentService) {
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
}
