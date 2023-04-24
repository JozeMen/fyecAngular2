import {Component, OnInit} from '@angular/core';
import {Company} from "../../models/company";
import {Employee} from "../../models/employee";
import {Router} from "@angular/router";
import {CompanyService} from "../../services/company.service";
import {EmployeeService} from "../../services/employee.service";

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
  constructor(private router: Router, private employeeService: EmployeeService) {
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

}
