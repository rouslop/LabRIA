import { Component, OnInit } from '@angular/core';
import { GetNoticiasService } from 'src/app/services/get-noticias.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Noticia } from 'src/app/models/noticia';

@Component({
  selector: 'app-alta-noticia',
  templateUrl: './alta-noticia.component.html',
  styleUrls: ['./alta-noticia.component.css']
})
export class AltaNoticiaComponent implements OnInit {
  formNoticia = new FormGroup ({
    titulo: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    fechaCaducidad: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required)
  });

  constructor(private service: GetNoticiasService) { }

  ngOnInit(): void {
  }

  agregarNoticia(){
    let n = new Noticia();
    n.titulo = this.formNoticia.controls["titulo"].value;
    n.descripcion = this.formNoticia.controls["descripcion"].value;
    n.fechaCaducidad =  this.formNoticia.controls["fechaCaducidad"].value;
    n.imagen = this.formNoticia.controls["imagen"].value;
    this.service.addNoticia(n).subscribe(res => {console.log(res)});

  }

}
