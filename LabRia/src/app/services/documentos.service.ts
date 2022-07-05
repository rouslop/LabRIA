import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Documento } from '../models/documento';
import { ResDocumento } from '../models/resDocumentos';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {
  baseUrl = environment.apiUrl + "/api/Documentos";
  documento: Documento = new Documento;
  constructor(private http: HttpClient) { }

  getDocsActivos(tipo:string): Observable<Documento[]>{
    let url = this.baseUrl + "/Activos?tipo="+tipo;
    return this.http.get<Documento[]>(url);
  }

  getDocsPaginados(n:number): Observable<ResDocumento>{
    let url = this.baseUrl + "/Paged/"+n+"/5";
    return this.http.get<ResDocumento>(url);
  }

  agregarDoc(doc: Documento) : Observable<Documento>{
    return this.http.post<Documento>(this.baseUrl,doc);
  }

  guardarDoc(d:Documento){
    this.documento = d;
  }

  getDoc(): Documento{
    return this.documento;
  }

  editarDoc(d:Documento) : Observable<Documento>{
    let url = this.baseUrl +"/"+ d.id;
    return this.http.put<Documento>(url,d);
  }

}
