import { Component, OnInit } from '@angular/core';
import { GetNoticiasService } from '../../services/get-noticias.service';
import { Noticia } from '../../models/noticia';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  noticias: Array<Noticia> = [];

  constructor(private getNoticias: GetNoticiasService) { }

  ngOnInit(): void {
  }

  getListNoticias(){
    this.getNoticias.getNoticias().subscribe((noticiasFromApi) => {
      this.noticias = noticiasFromApi;
      console.log(this.noticias);
    }, (err: any) => {
      console.error(err);
    });
  }

}
