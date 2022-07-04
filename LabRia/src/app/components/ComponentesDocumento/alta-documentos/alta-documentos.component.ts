import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Documento } from 'src/app/models/documento';
import { DocumentosService } from 'src/app/services/documentos.service';

@Component({
  selector: 'app-alta-documentos',
  templateUrl: './alta-documentos.component.html',
  styleUrls: ['./alta-documentos.component.css']
})
export class AltaDocumentosComponent implements OnInit {
  formDocumento = new FormGroup ({
    titulo: new FormControl('',Validators.required),
    tipo: new FormControl('',Validators.required),
    documento: new FormControl('', Validators.required),
    activo: new FormControl('', Validators.required)
  });

  constructor(private servicio: DocumentosService) { }

  ngOnInit(): void {
  }

  agregarDocumento(){
    let d = new Documento();
    d.titulo =  this.formDocumento.controls["titulo"].value;
    d.tipo = this.formDocumento.controls["tipo"].value;
    d.activo = this.formDocumento.controls["activo"].value;
    //agregar el documento en base64
  }

}
