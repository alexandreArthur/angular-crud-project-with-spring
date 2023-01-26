import { Injectable } from '@angular/core';
import { Discipline } from '../model/discipline';
import { HttpClient } from '@angular/common/http'
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisciplinesServicesService {
  private readonly API = 'api/disciplines';

  constructor(private httpClient: HttpClient) { }

  list(): Observable<Discipline[]>{
    return this.httpClient.get<Discipline[]>(this.API)
    .pipe(
      delay(1000)
    );
  }

  save(params: Discipline): Observable<Discipline>{
    return this.httpClient.post<Discipline>(this.API, params);
  }

}
