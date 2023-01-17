import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { DisciplinesComponent } from './disciplines/disciplines.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    DisciplinesComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    MatTableModule
  ]
})
export class CourseModule { }
