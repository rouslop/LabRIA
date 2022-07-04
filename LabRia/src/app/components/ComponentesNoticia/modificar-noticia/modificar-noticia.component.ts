import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import {GetNoticiasService} from '../../../services/get-noticias.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modificar-noticia',
  templateUrl: './modificar-noticia.component.html',
  styleUrls: ['./modificar-noticia.component.css']
})
export class ModificarNoticiaComponent implements OnInit {
  materia: Noticia = new Noticia();
  constructor(private service: GetNoticiasService,private router:Router ) { }

  ngOnInit(): void {
    this.materia = this.service.editarNoticiaObtener();
  }

  

}
