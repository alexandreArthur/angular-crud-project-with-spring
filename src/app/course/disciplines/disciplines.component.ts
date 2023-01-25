import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Discipline } from '../model/discipline';
import { DisciplinesServicesService } from '../services/disciplines-services.service';

@Component({
  selector: 'app-disciplines',
  templateUrl: './disciplines.component.html',
  styleUrls: ['./disciplines.component.scss']
})

export class DisciplinesComponent implements OnInit{

  disciplines$: Observable<Discipline[]>;
  displayedColumns = ['id','name', 'category', 'actions'];

  constructor(
    private disciplinesServicesService: DisciplinesServicesService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ){
    this.disciplines$ = this.disciplinesServicesService.list()
      .pipe(
        catchError((err)=>{
          this.onError('Load failed. Try again later.');
          return of([]);
        })
      );
  }

  ngOnInit(): void {

  }

  onError(errorMsg: string){
    this.dialog.open(ErrorDialogComponent,
      {
        data: errorMsg
      })
  }

  onAdd(){
    this.router.navigate(['new'], { relativeTo: this.route });
  }

}
