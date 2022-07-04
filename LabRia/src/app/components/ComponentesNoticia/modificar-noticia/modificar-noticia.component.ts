import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {GetNoticiasService} from '../../../services/get-noticias.service';
import { Observable, subscribeOn, Subscriber } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modificar-noticia',
  templateUrl: './modificar-noticia.component.html',
  styleUrls: ['./modificar-noticia.component.css']
})
export class ModificarNoticiaComponent implements OnInit {
  selectedFile: any = null;
  Noticia: Noticia = new Noticia();
  public Imagebase64: any;
  constructor(private service: GetNoticiasService,private router:Router ) { }
  
  formNoticia = new FormGroup ({
    titulo: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    fechaCaducidad: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required)
  });

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

  ngOnInit(): void {
    this.Noticia = this.service.editarNoticiaObtener();
  }

  editarNoticia(){
    let n = new Noticia();
    n.id = this.Noticia.id;
    n.titulo = this.formNoticia.controls["titulo"].value;
    n.descripcion = this.formNoticia.controls["descripcion"].value;
    n.fechaCaducidad = this.formNoticia.controls["fechaCaducidad"].value;
    n.imagen =this.Imagebase64 ? this.Imagebase64 : " ",
    this.service.editarMateria(n).subscribe({
      next: value => console.log(value),
      error: err => { alert('Error al agregar las noticias: ' + err) }
    });
    this.router.navigate(['/noticia']);
  }


}
