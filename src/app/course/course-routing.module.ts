import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisciplineFormComponent } from './disciplines/discipline-form/discipline-form.component';
import { DisciplinesComponent } from './disciplines/disciplines.component';

const routes: Routes = [
  { path: '', component: DisciplinesComponent },
  { path: 'new', component: DisciplineFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
