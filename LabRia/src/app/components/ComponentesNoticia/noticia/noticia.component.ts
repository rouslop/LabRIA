import { Component, OnInit } from '@angular/core';
import { GetNoticiasService } from '../../../services/get-noticias.service';
import { Noticia } from '../../../models/noticia';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  noticias: Noticia[] = [];

  constructor(private getNoticias: GetNoticiasService) { }

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
  }
