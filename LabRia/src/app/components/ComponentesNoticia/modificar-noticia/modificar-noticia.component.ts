import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {GetNoticiasService} from '../../../services/get-noticias.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modificar-noticia',
  templateUrl: './modificar-noticia.component.html',
  styleUrls: ['./modificar-noticia.component.css']
})
export class ModificarNoticiaComponent implements OnInit {
  Noticia: Noticia = new Noticia();
  constructor(private service: GetNoticiasService,private router:Router ) { }

  formNoticia = new FormGroup ({
    titulo: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    fechaCaducidad: new FormControl('', Validators.required),
    imagen: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    this.Noticia = this.service.editarNoticiaObtener();
  }

  editarNoticia(){
    let n = new Noticia();
    n.id = this.Noticia.id;
    n.titulo = this.formNoticia.controls["titulo"].value;
    n.descripcion = this.formNoticia.controls["descripcion"].value;
    n.fechaCaducidad = this.formNoticia.controls["fechaCaducidad"].value;
    n.imagen = this.formNoticia.controls["imagen"].value;
    this.service.editarMateria(n).subscribe({
      next: value => console.log(value),
      error: err => { alert('Error al agregar las noticias: ' + err) }
    });
    //this.router.navigate(['/noticia']);
  }


}
