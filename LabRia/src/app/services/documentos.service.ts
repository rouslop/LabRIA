import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Documento } from '../models/documento';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {
  baseUrl = environment.apiUrl + "/api/Documentos/";
  constructor(private http: HttpClient) { }

  getDocsActivos(): Observable<Documento[]>{
    let url = this.baseUrl + "/Activos";
    return this.http.get<Documento[]>(url);
  }

  agregarDoc(doc: Documento) : Observable<Documento>{
    return this.http.post<Documento>(this.baseUrl,doc);
  }
}
