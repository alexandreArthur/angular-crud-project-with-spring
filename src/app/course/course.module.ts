import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { DisciplinesComponent } from './disciplines/disciplines.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


@NgModule({
  declarations: [
    DisciplinesComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    AppMaterialModule
  ]
})
export class CourseModule { }
