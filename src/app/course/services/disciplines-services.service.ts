import { Injectable } from '@angular/core';
import { Discipline } from '../model/discipline';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DisciplinesServicesService {

  constructor(private httpClient: HttpClient) { }

  list(): Discipline[]{
    return [
      { _id: 1, category: 'physics', name:'quantumm physics'}
    ]
  }


}
