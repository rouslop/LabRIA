import { Injectable } from '@angular/core';
import {Materia} from '../models/materia';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import{Res} from'../models/res';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  
  constructor(private http: HttpClient) { }

  
  getMaterias(): Observable<Materia[]>{
    return this.http.get<Materia[]>(environment.apiUrl+"/api/Materias");
  }

  addMaterias(m:Materia): Observable<Materia>{
    return this.http.post<Materia>(environment.apiUrl+"/api/Materias", m);
  }

  eliminarMateria(m:String):Observable<Res>{
    console.log(m);
    return this.http.delete<Res>(environment.apiUrl+"/api/Materias/"+m);
  }

}
