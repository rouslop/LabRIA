import { Component, OnInit } from '@angular/core';
import { Documento } from 'src/app/models/documento';
import { DocumentosService } from 'src/app/services/documentos.service';

@Component({
  selector: 'app-datosinteres',
  templateUrl: './datosinteres.component.html',
  styleUrls: ['./datosinteres.component.css']
})
export class DatosinteresComponent implements OnInit {

  documentos:Documento[] = [];
  constructor(private servicio: DocumentosService) { }

  ngOnInit(): void {
    this.getDocumentosActivos();
  }

  getDocumentosActivos() {
    this.servicio.getDocsActivos("DATOS_DE_INTERES").subscribe({
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
