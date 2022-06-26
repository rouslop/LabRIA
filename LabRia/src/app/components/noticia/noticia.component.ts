import { Component, OnInit } from '@angular/core';
import { GetNoticiasService } from '../../services/get-noticias.service';
import { Noticia } from '../../models/noticia';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  noticias: Noticia[] = [];

  constructor(private getNoticias: GetNoticiasService) { }

  ngOnInit(): void {
    // this.getListNoticias();
    this.addNoticia();

  }

  getListNoticias() {
    this.getNoticias.getNoticias().subscribe({
      next: value => this.noticias = value,
      error: err => { alert('Error al cargar las noticias: ' + err) }
    }
    );
  }

  addNoticia() {
    let n: Noticia = {
      id: 0,
      descripcion: "asdfghjkl",
      fechaCaducidad: "2022-06-24T22:32:09.807Z",
      imagen: "",
      titulo: "Romina",
    };
    this.getNoticias.addNoticia(n).subscribe({
      next: value => console.log(value),
      error: err => { alert('Error al cargar las noticias: ' + err) }
    });


  }
}
