import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { DisciplinesComponent } from './disciplines/disciplines.component';


@NgModule({
  declarations: [
    DisciplinesComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
