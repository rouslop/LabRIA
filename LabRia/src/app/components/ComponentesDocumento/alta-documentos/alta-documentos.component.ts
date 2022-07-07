import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Documento } from 'src/app/models/documento';
import { Observable, subscribeOn, Subscriber } from 'rxjs';
import { DocumentosService } from 'src/app/services/documentos.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

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

  public Imagebase64: any;
  selectedFile: any = null;

  constructor(private servicio: DocumentosService,private router:Router) { }

  ngOnInit(): void {
  }
  onFileSelected(event: any): void {
    this.convertToBase64(event.target.files[0]);
  }

  convertToBase64(file: File) {
    console.log(file);
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    })

    observable.subscribe((d) => {
      this.Imagebase64 = d;
    })
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file)

    fileReader.onload = () => {
      subscriber.next(fileReader.result)
      subscriber.complete()
    }
    fileReader.onerror = () => {
      subscriber.error()
    }
  }

  agregarDocumento(){
    let d = new Documento();
    d.titulo =  this.formDocumento.controls["titulo"].value;
    d.tipo = this.formDocumento.controls["tipo"].value;
    d.activo = true;//this.formDocumento.controls["activo"].value;
    d.documentoPDF = this.Imagebase64 ? this.Imagebase64 : " ";
    this.servicio.agregarDoc(d).subscribe({
      next: value => console.log(value),
      error: err => { this.alert('Error al agregar el documento: ') }
    });
    
    this.router.navigate(['/documentos']);
  }

  alert(x:string):void{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: x,
    })
   }
}
