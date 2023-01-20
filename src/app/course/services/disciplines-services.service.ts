import { Injectable } from '@angular/core';
import { Discipline } from '../model/discipline';
import { HttpClient } from '@angular/common/http'
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisciplinesServicesService {
  private readonly API = 'assets/disciplines.json';

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Discipline[]>{
    return this.httpClient.get<Discipline[]>(this.API)
    .pipe(
      delay(1000)
    );
  }

}
