import { catchError, EMPTY } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Discipline } from '../../model/discipline';
import { DisciplinesServicesService } from '../../services/disciplines-services.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-discipline-form',
  templateUrl: './discipline-form.component.html',
  styleUrls: ['./discipline-form.component.scss']
})
export class DisciplineFormComponent implements OnInit{

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private disciplinesServicesService: DisciplinesServicesService,
    private snackBar: MatSnackBar,
    private location: Location
    ){
      this.form = this.formBuilder.group({
        name: [null],
        category: [null]
      });
  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.disciplinesServicesService.save(this.form.value)
      .pipe(
        catchError((err)=>{
          this.onError('Error');
          return EMPTY;
        })
      )
      .subscribe((r)=>{
        this.onSuccess('Curso salvo com sucesso!');
        this.onCancel();
      });
  }

  onSuccess(message: string, action?: string){
    this.snackBar.open(message, action, {
      duration: 5000
    });
  }

  onError(message: string, action?: string){
    this.snackBar.open(message, action, {
      duration: 5000
    });
  }

  onCancel(){
    this.form.reset();
    this.location.back();
  }


}
