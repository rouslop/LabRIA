import { Component, OnInit } from '@angular/core';
import { GetNoticiasService } from 'src/app/services/get-noticias.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Noticia } from 'src/app/models/noticia';
import { Observable, subscribeOn, Subscriber } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-alta-noticia',
  templateUrl: './alta-noticia.component.html',
  styleUrls: ['./alta-noticia.component.css']
})
export class AltaNoticiaComponent implements OnInit {
  selectedFile: any = null;
  formNoticia = new FormGroup ({
    titulo: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    fechaCaducidad: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required)
  });

  constructor(private service: GetNoticiasService,private router:Router) { }

  public Imagebase64: any;
  

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


  agregarNoticia(){
    let n = new Noticia();
    n.titulo = this.formNoticia.controls["titulo"].value;
    n.descripcion = this.formNoticia.controls["descripcion"].value;
    n.fechaCaducidad =  this.formNoticia.controls["fechaCaducidad"].value;
    n.imagen =this.Imagebase64 ? this.Imagebase64 : " ",
    this.service.addNoticia(n).subscribe({
      next: value => console.log(value),
      error: err => { alert('Error al agregar las noticias: ' + err) }
    });
    
    this.router.navigate(['/noticia']);

  }

}
