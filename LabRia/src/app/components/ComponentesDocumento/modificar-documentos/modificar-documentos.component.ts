import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Documento } from 'src/app/models/documento';
import { Observable, subscribeOn, Subscriber } from 'rxjs';
import { DocumentosService } from 'src/app/services/documentos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-documentos',
  templateUrl: './modificar-documentos.component.html',
  styleUrls: ['./modificar-documentos.component.css']
})
export class ModificarDocumentosComponent implements OnInit {
  token = localStorage.getItem('token');
  documentos: Documento[] = [];
  constructor(private servicio: DocumentosService,private router:Router) { }
  formDocumento = new FormGroup ({
    titulo: new FormControl('',Validators.required),
    tipo: new FormControl('',Validators.required),
    documento: new FormControl('', Validators.required),
    activo: new FormControl('', Validators.required)
  });
  doctemporal: Documento = this.servicio.getDoc();

  public Imagebase64: any;
  selectedFile: any = null;

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

  editarDocumento(){
    let d = new Documento();
    d.id = this.doctemporal.id;
    d.titulo =  this.formDocumento.controls["titulo"].value;
    d.tipo = this.formDocumento.controls["tipo"].value;
    d.activo = this.formDocumento.controls["activo"].value;
    d.documentoPDF = this.Imagebase64 ? this.Imagebase64 : " ";
    this.servicio.editarDoc(d).subscribe({
      next: value => console.log(value),
      error: err => { this.alert('Error al editar el documento: ' + err) }
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
