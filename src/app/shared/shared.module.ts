import { AppMaterialModule } from './app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { DisciplinePipe } from './pipes/discipline.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    DisciplinePipe,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
  ],
  exports:[
    ErrorDialogComponent,
    DisciplinePipe
  ]
})
export class SharedModule { }
