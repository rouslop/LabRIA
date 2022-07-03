import { Injectable } from '@angular/core';
import {Unidades}from '../models/unidades';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnidadesService {

  constructor(private http: HttpClient) { }

  
  getUnidades(): Observable<Unidades[]>{
    return this.http.get<Unidades[]>(environment.apiUrl+"/api/UnidadesCurriculares");
  }
  
  addUnidades(U:Unidades): Observable<Unidades>{
    return this.http.post<Unidades>(environment.apiUrl+"/api/UnidadesCurriculares", U);
  }
  
  getUnidad(U:Unidades): Observable<Unidades>{
    return this.http.get<Unidades>(environment.apiUrl+"/api/UnidadesCurriculares/"+U);
  }
}
