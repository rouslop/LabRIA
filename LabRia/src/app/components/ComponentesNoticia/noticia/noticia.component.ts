import { Component, OnInit } from '@angular/core';
import { GetNoticiasService } from '../../../services/get-noticias.service';
import { Noticia } from '../../../models/noticia';
import {Router} from '@angular/router';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  noticias: Noticia[] = [];
  token = localStorage.getItem('token');
  constructor(private getNoticias: GetNoticiasService,private router:Router) { }

  ngOnInit(): void {
    this.getListNoticias();
  }

  getListNoticias() {
    this.getNoticias.getNoticias().subscribe({
      next: value => this.noticias = value,
      error: err => { alert('Error al cargar las noticias: ' + err) }
    }
    );
  }

  
  editarNoticia(i: any ,t: any ,d: any ,f: any, im: any){
    let n = new Noticia();
    n.id = i;
    n.titulo = t;
    n.descripcion = d;
    n.fechaCaducidad = f;
    n.imagen = im;
    this.getNoticias.editarNoticiaGuardar(n);
    this.router.navigate(['/editarMateria']);
}

  eliminarNoticia(x: any){ 
    this.ngOnInit();
    this.getNoticias.eliminarNoticia(x).subscribe(data => {
        console.log(data);
      });
    this.ngOnInit();
  }
  }
