import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia';

@Injectable({
  providedIn: 'root'
})
export class GetNoticiasService {
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
}
