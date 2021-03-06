import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { GetNoticiasService } from 'src/app/services/get-noticias.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  noticias: Noticia[] = [];
  constructor(private servicioNoticia: GetNoticiasService) { }



  ngOnInit(): void {
    this.getListNoticias();
  }

  getListNoticias() {
    this.servicioNoticia.getNoticias().subscribe({
      next: value => this.noticias = value,
      error: err => { this.alert('Error al cargar las noticias: ') }
    }
    );
  }

  alert(x:string):void{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: x,
    })
   }
}
