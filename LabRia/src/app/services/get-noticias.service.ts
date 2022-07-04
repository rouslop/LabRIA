import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia';

@Injectable({
  providedIn: 'root'
})
export class GetNoticiasService {

  noticiaAeditar:Noticia = new Noticia()

  baseUrl = environment.apiUrl + "/api/Noticias/Activas";
  constructor(private http: HttpClient) { }

  getNoticias(): Observable<Noticia[]>{
    return this.http.get<Noticia[]>(this.baseUrl);
  }

  addNoticia(n:Noticia): Observable<Noticia>{
    return this.http.post<Noticia>(environment.apiUrl+"/api/Noticias", n);
  }

  eliminarNoticia(n:String){
    console.log(n);
    let url = environment.apiUrl + "/api/Noticias/" + n
    return this.http.delete(url);
  }

  editarNoticiaGuardar(n:Noticia){
    this.noticiaAeditar = n;
   }
   editarNoticiaObtener():Noticia{
     return this.noticiaAeditar;
    }
    
    editarMateria(m:Noticia): Observable<Noticia>{
     let url = environment.apiUrl + "/api/Materias/" + m.id
     return this.http.put<Noticia>(url, m)
    }
}
