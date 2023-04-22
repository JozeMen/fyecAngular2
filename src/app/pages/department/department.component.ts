import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DepartmentService} from "../../services/department.service";
import {Department} from "../../models/department";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments!: Department[]
  department!: Department
  err: boolean = false;

  constructor(private router: Router, private departmentService: DepartmentService) {
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
  }
}
