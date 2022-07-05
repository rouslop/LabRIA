import { Component, OnInit } from '@angular/core';
import { Documento } from 'src/app/models/documento';
import { DocumentosService } from 'src/app/services/documentos.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {
  token = localStorage.getItem('token');
  documentos: Documento[] = [];
  constructor(private servicio: DocumentosService) { }

  ngOnInit(): void {
    // this.getDocumentosActivos();
    this.getDocumentosPaginados(0);
  }

  eliminarDcoumento() {

  }

  editarDcoumento() {

  }

  getDocumentosPaginados(n:number){
    this.servicio.getDocsPaginados(n).subscribe({
      next: value => this.documentos = value.list,
      error: err => {alert('Error al cargar documentos paginados: ' + err)}
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
}
