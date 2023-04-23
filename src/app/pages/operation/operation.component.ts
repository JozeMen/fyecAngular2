import {Component, OnInit} from '@angular/core';
import {Operation} from "../../models/operation";
import {Router} from "@angular/router";
import {OperationService} from "../../services/operation.service";

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements  OnInit{
  operations!: Operation[];
  selectedOperation!: Operation;
  err: boolean = false;


  constructor(private router: Router, private operationService: OperationService) {
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
  }
  deleteOperation(value: number) {
    this.operationService.deleteOperation(value).subscribe({
      next:(data) => {}
    })
  }

}
