import { Injectable } from '@angular/core';
import {Unidades}from '../models/unidades';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnidadesService {

  unidad: string ="";

  constructor(private http: HttpClient) { }

  guardarUnidad(x: any){
    this.unidad=x;
  }
  
  getUnidades(): Observable<Unidades[]>{
    return this.http.get<Unidades[]>(environment.apiUrl+"/api/UnidadesCurriculares");
  }
  
  addUnidades(U:Unidades): Observable<Unidades>{
    return this.http.post<Unidades>(environment.apiUrl+"/api/UnidadesCurriculares", U);
  }
  
  getUnidad(): Observable<Unidades>{
    let url = environment.apiUrl+"/api/UnidadesCurriculares/"+this.unidad;
    return this.http.get<Unidades>(url);
  }

  getunaUnidad(x:string): Observable<Unidades>{
    let url = environment.apiUrl+"/api/UnidadesCurriculares/"+x;
    return this.http.get<Unidades>(url);
  }

  eliminarUnidad(u:any): Observable<Unidades>{
    let url = environment.apiUrl+"/api/UnidadesCurriculares/"+u;
    return this.http.delete<Unidades>(url);
  }

  editarUnidad(U:any): Observable<Unidades>{
    let url = environment.apiUrl+"/api/UnidadesCurriculares/"+this.unidad;
    return this.http.put<Unidades>(url,U);
  }

  agregarPrevia(x:any): Observable<Unidades>{
    let url = environment.apiUrl+"/api/Previas"
    return this.http.post<Unidades>(url,x);
  }

  eliminarPrevia(x:any){
    let url = environment.apiUrl+"/api/Previas/"+x;
    return this.http.delete<Unidades>(url);  
  }
}
