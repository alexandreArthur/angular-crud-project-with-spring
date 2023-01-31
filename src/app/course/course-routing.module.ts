import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisciplineFormComponent } from './disciplines/discipline-form/discipline-form.component';
import { DisciplinesComponent } from './disciplines/disciplines.component';
import { DisciplineResolverResolver } from './disciplines/guards/discipline-resolver.resolver';

const routes: Routes = [
  { path: '', component: DisciplinesComponent },
  { path: 'new', component: DisciplineFormComponent, resolve: { discipline: DisciplineResolverResolver} },
  { path: 'edit/:id', component: DisciplineFormComponent, resolve: { discipline: DisciplineResolverResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
