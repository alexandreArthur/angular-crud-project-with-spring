import { catchError, EMPTY } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  form = new FormGroup({
    name: new FormControl('', {nonNullable: true}),
    category: new FormControl('', {nonNullable: true})
  });

  constructor(
    private formBuilder: FormBuilder,
    private disciplinesServicesService: DisciplinesServicesService,
    private snackBar: MatSnackBar,
    private location: Location
    ){
      //this.form
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.disciplinesServicesService.save(this.DisciplineParams(this.form))
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

  private DisciplineParams(form: FormGroup): Discipline{
    return{
      name: form.value.name,
      category: form.value.category
    }
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
