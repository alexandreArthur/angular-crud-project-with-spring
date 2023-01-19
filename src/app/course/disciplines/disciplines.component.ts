import { Component, OnInit } from '@angular/core';
import { Discipline } from '../model/discipline';
import { DisciplinesServicesService } from '../services/disciplines-services.service';

@Component({
  selector: 'app-disciplines',
  templateUrl: './disciplines.component.html',
  styleUrls: ['./disciplines.component.scss']
})

export class DisciplinesComponent implements OnInit{

  disciplines: Discipline[] = [];
  displayedColumns = ['name', 'category'];

  constructor(
    private disciplinesServicesService: DisciplinesServicesService
  ){}

  ngOnInit(): void {
    this.disciplines = this.disciplinesServicesService.list();
  }

}
