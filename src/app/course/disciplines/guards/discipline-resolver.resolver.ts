import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Discipline } from '../../model/discipline';
import { DisciplinesServicesService } from '../../services/disciplines-services.service';

@Injectable({
  providedIn: 'root'
})
export class DisciplineResolverResolver implements Resolve<Discipline> {

  constructor(private disciplinesServicesService: DisciplinesServicesService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Discipline> {
    if(route.params && route.params['id']){
      return this.disciplinesServicesService.findById(route.params['id']);
    }
    return of({id:'', name: '', category: ''});
  }
}
