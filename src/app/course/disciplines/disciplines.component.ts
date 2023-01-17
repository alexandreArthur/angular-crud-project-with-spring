import { Component, OnInit } from '@angular/core';
import { Discipline } from '../model/discipline';

@Component({
  selector: 'app-disciplines',
  templateUrl: './disciplines.component.html',
  styleUrls: ['./disciplines.component.scss']
})

export class DisciplinesComponent implements OnInit{

  disciplines: Discipline[] = [
    { _id: 1, category: 'physics', name:'quantumm physics'}
  ];
  displayedColumns = ['name', 'category'];

  constructor(){}

  ngOnInit(): void {

  }

}
