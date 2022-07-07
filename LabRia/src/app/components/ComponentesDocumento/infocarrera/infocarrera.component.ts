import { Component, OnInit } from '@angular/core';
import { Documento } from 'src/app/models/documento';
import { DocumentosService } from 'src/app/services/documentos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-infocarrera',
  templateUrl: './infocarrera.component.html',
  styleUrls: ['./infocarrera.component.css']
})
export class InfocarreraComponent implements OnInit {
documentos:Documento[] = [];
  constructor(private servicio: DocumentosService) { }

  ngOnInit(): void {
    this.getDocumentosActivos();
  }

  getDocumentosActivos() {
    this.servicio.getDocsActivos("INFORMACION_DE_CARRERA").subscribe({
      next: value => this.documentos = value,
      error: err => { this.alert('Error al cargar los documentos: ') }
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

   alert(x:string):void{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: x,
    })
   }
}
