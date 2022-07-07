import { Component, OnInit } from '@angular/core';
import { GetNoticiasService } from '../../../services/get-noticias.service';
import { Noticia } from '../../../models/noticia';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  noticias: Noticia[] = [];
  token = localStorage.getItem('token');
  limit = 5;
  page = 1;
  offset = 0; 
  cantidadPag = 0;
  constructor(private getNoticias: GetNoticiasService,private router:Router) { }

  ngOnInit(): void {
    if(this.token!="" && this.token!=null){
      this.page = 1;
      this.offset = 0; 
      this.getListNoticias();
      console.log(this.noticias);
    }
    else{
      this.getActivas();
    }
    
  }

  getActivas(){
    this.getNoticias.getNoticias().subscribe({
      next: value => {this.noticias = value},
      error: err => { this.alert('Error al cargar las noticias: ') }
    }
    );
  }

  siguientePag() {
    if (this.page < this.cantidadPag) {
      this.offset += 5;
      this.getNoticiaspaginadas();
      this.page += 1;
    }
    console.log(this.noticias);
  }

  anteriorPag() {
    if (this.page > 1) {
      if(this.offset >= 0){
        this.offset -= 5;
        this.getNoticiaspaginadas();
        this.page -= 1;
      }
    }
  }

  getNoticiaspaginadas(){
    this.getNoticias.getNoticiaspaginadas(this.offset).subscribe({
      next: value => {this.noticias = value.list, this.cantidadPag = value.size/5   },
      error: err => { this.alert('Error al cargar las noticias: ' ) }
    }
    );
  }

  getListNoticias() {
    this.getNoticias.getNoticiaspaginadas(0).subscribe({
      next: value => {this.noticias = value.list, this.cantidadPag = value.size/5; },
      error: err => { this.alert('Error al cargar las noticias: ') }
    }
    );
    console.log(this.noticias);
    console.log(this.cantidadPag);
  }

  
  editarNoticia(i: any ,t: any ,d: any ,f: any, im: any){
    let n = new Noticia();
    n.id = i;
    n.titulo = t;
    n.descripcion = d;
    n.fechaCaducidad = f;
    n.imagen = im;
    this.getNoticias.editarNoticiaGuardar(n);
    this.router.navigate(['/modificarNoticia']);
}

  eliminarNoticia(x: any){ 
    const swalWithBootstrapButtons = Swal.mixin({
      buttonsStyling: true
    })

    swalWithBootstrapButtons.fire({
      title: 'Estás seguro?',
      text: "Esta acción no se puede revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si    ',
      cancelButtonText: '   No',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {  
        alert('Acaba de eliminar una noticia');
        this.ngOnInit();
        this.getNoticias.eliminarNoticia(x).subscribe(data => {
            console.log(data);
          });
        this.getListNoticias
      }
    })
  }
  
  alert(x:string):void{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: x,
    })
   }
  
  }
