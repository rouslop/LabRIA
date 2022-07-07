import { Component, OnInit } from '@angular/core';
import { Documento } from 'src/app/models/documento';
import {Router} from '@angular/router';
import { DocumentosService } from 'src/app/services/documentos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {
  token = localStorage.getItem('token');
  documentos: Documento[] = [];
  limit = 5;
  page = 1;
  offset = 0; 
  cantidadPag = 0;
  constructor(private servicio: DocumentosService,private router:Router) { }

  ngOnInit(): void {
    // this.getDocumentosActivos();
    this.page = 1;
    this.offset = 0;
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
      next: value => {this.documentos = value.list, this.cantidadPag = value.size/5},
      error: err => { this.alert('Error al cargar documentos paginados: ') }
    });
    console.log(this.documentos);
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

   siguientePag() {
    if (this.page < this.cantidadPag) {
      this.offset += 5;
      this.getDocumentosPaginados(this.offset);
      this.page += 1;
    }
    console.log(this.documentos);
  }

  anteriorPag() {
    if (this.page > 1) {
      if(this.offset >= 0){
        this.offset -= 5;
        this.getDocumentosPaginados(this.offset);
        this.page -= 1;
      }
    }
  }
  
  alert(x:string):void{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: x,
    })
   }
}


