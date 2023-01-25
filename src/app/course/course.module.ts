import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { DisciplinesComponent } from './disciplines/disciplines.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { DisciplineFormComponent } from './disciplines/discipline-form/discipline-form.component';


@NgModule({
  declarations: [
    DisciplinesComponent,
    DisciplineFormComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class CourseModule { }
