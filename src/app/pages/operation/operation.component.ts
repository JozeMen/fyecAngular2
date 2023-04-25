import {Component, OnInit} from '@angular/core';
import {Operation} from "../../models/operation";
import {Router} from "@angular/router";
import {OperationService} from "../../services/operation.service";
import {EmployeeService} from "../../services/employee.service";
import {Employee} from "../../models/employee";

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements  OnInit{
  operations!: Operation[];
  selectedOperation!: Operation;
  err: boolean = false;

  employName!: string;
  employees!: Employee[];
  operationNumber!: number;
  operationDate!: Date;
  description!: string;

  operation_nameIsReadable: boolean = false;
  temp!: number;


  constructor(private router: Router, private operationService: OperationService, private employeeService: EmployeeService) {
  }

  onSelect(operation: Operation) {

  }

  ngOnInit(): void {
    this.operationService.getAllOperation().subscribe({
        next: (data) => {
          this.operations = data;
        },
        error: (err) => {
          this.err = true;
        }
      }
    );
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
  deleteOperation(value: number) {
    this.operationService.deleteOperation(value).subscribe({
      next:(data) => {}
    })
  }

  createOperation(id: number, value: number, value1: Date, value2: string) {
    this.operationService.createOperation(id, value, value1, value2).subscribe({
      next:(data) => {}
    })

  }

}
