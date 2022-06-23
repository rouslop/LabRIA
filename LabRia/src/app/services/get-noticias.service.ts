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

  getNoticias(): Observable<Array<Noticia>>{
    return this.http.get<Array<Noticia>>(this.baseUrl);
  }
}
