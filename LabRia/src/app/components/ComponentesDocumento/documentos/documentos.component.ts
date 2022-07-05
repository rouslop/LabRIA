import { Component, OnInit } from '@angular/core';
import { Documento } from 'src/app/models/documento';
import {Router} from '@angular/router';
import { DocumentosService } from 'src/app/services/documentos.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {
  token = localStorage.getItem('token');
  documentos: Documento[] = [];
  constructor(private servicio: DocumentosService,private router:Router) { }

  ngOnInit(): void {
    // this.getDocumentosActivos();
    this.getDocumentosPaginados(0);
  }

  editarDocumento(id:any, titulo:any, tipo:any, doc: any) {
    let d = new Documento();
    d.activo = true;
    d.documentoPDF = doc;
    d.id = id;
    d.tipo = tipo;
    d.titulo = titulo;
    this.servicio.guardarDoc(d);
    this.router.navigate(['/editarDocumento']);
  }

  getDocumentosPaginados(n: number) {
    this.servicio.getDocsPaginados(n).subscribe({
      next: value => this.documentos = value.list,
      error: err => { alert('Error al cargar documentos paginados: ' + err) }
    });
    console.log(this.documentos);
  }

  getDocumentosActivos() {
    this.servicio.getDocsActivos().subscribe({
      next: value => this.documentos = value,
      error: err => { alert('Error al cargar los documentos: ' + err) }
    }
    );

  }

  descargarpdf(x: any){
    let aux = x.substring(28)
    const source = `data:application/pdf;base64,${aux}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `Documento.pdf`
    link.click();
   return aux;
   }
}


