import {Component, OnInit} from '@angular/core';
import {Position} from "../../models/position";
import {Router} from "@angular/router";
import {PositionService} from "../../services/position.service";

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent implements OnInit{
  positions!: Position[];
  selectedPosition!: Position;
  position_nameIsReadable: boolean = false;


  position_name!: string;
  position_number!: number;
  err: boolean = false;

  constructor(private router: Router, private positionService: PositionService) {
  }

  ngOnInit(): void {
    this.positionService.getAllPositions().subscribe({
        next: (data) => {
          this.positions = data;
        },
        error: (err) => {
          this.err = true;
        }
      }
    );
  }
  deletePosition(value:number) {
    this.positionService.deletePosition(value).subscribe({
      next:(data) => {}
    })
  }

  createPosition(value: number, value1: string) {
    this.positionService.createPosition(value, value1).subscribe({
      next:(data) => {}
    })

  }


}
