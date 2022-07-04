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
  

  eliminarMateria(m:String){
    let url = environment.apiUrl + "/api/Materias/" + m
    return this.http.delete(url);
  }


  editarMateriaGuardar(m:Materia){
   this.materiaAeditar = m;
  }
  editarMateriaObtener():Materia{
    return this.materiaAeditar;
   }
   
   editarMateria(m:Materia): Observable<Materia>{
    let url = environment.apiUrl + "/api/Materias/" + m.id
    return this.http.put<Materia>(url, m)
   }
   

}
