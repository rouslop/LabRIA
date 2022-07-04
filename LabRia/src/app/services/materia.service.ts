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

  materiaAeditar:Materia = new Materia()

  constructor(private http: HttpClient) { }

  
  getMaterias(): Observable<Materia[]>{
    return this.http.get<Materia[]>(environment.apiUrl+"/api/Materias");
  }

  addMaterias(m:Materia): Observable<Materia>{
    return this.http.post<Materia>(environment.apiUrl+"/api/Materias", m);
  }
  
  editarMateriaGuardar(m:Materia){
   this.materiaAeditar = m;   
  }
  editarMateriaObtener():Materia{
    return this.materiaAeditar;
   }
   editarMateria(m:Materia){
    return this.http.put(environment.apiUrl+"/api/Materiaa", m);
   }
   

  eliminarMateria(m:String){
    console.log(m);
    let url = environment.apiUrl + "/api/Materias/" + m
    return this.http.delete(url);
  }

}
