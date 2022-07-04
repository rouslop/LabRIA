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
  }

  eliminarDcoumento(){

  }

  editarDcoumento(){

  }

  getDcoumentosActivos(){
    this.servicio.getDocsActivos().subscribe({
      next: value => this.documentos = value,
      error: err => { alert('Error al cargar los documentos: ' + err) }
    }
    );
    
  }
}
