import {Component, OnInit} from '@angular/core';
import {Company} from "../../models/company";
import {Employee} from "../../models/employee";
import {Router} from "@angular/router";
import {CompanyService} from "../../services/company.service";
import {EmployeeService} from "../../services/employee.service";
import {DepartmentService} from "../../services/department.service";
import {Department} from "../../models/department";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees!: Employee[];
  selectedEmployee!: Employee;
  err: boolean = false;

  employee_nameIsReadable!: boolean;

  newName!: string;
  newId!: number;
  newFio!: string;
  newPhoneNumber!: string;
  readyToShow!: string;
  departmentName!: string;
  selectedTOEdit!: number;

  departments!: Department[];
  constructor(private router: Router, private employeeService: EmployeeService, private departmentService: DepartmentService) {
  }

  onSelect(employee: Employee) {

  }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe({
        next: (data) => {
          this.employees = data;
        },
        error: (err) => {
          this.err = true;
        }
      }
    );
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
  deleteEmployee(value: number) {
    this.employeeService.deleteEmployee(value).subscribe({
      next:(data) => {}
    })
  }
  createEmployee(name: string, value: number, value1: string, value3: string) {
    this.employeeService.createEmployee(name, value, value1, value3).subscribe({
      next: (data) => {}
    })

  }
  editEmployee(id:number, value: number, value1: string, value3: string) {
    this.employeeService.editEmployee(id, value, value1, value3).subscribe({
      next: (data) => {}
    })

  }


}
