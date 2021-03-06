import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Unidades } from 'src/app/models/unidades';
import { UnidadesService } from 'src/app/services/unidades.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-unidad',
  templateUrl: './unidad.component.html',
  styleUrls: ['./unidad.component.css']
})
export class UnidadComponent implements OnInit {
  unidad: Unidades = new Unidades;
  token = localStorage.getItem('token');
  constructor(public UnidadesSvc: UnidadesService, private router: Router) { }

  ngOnInit(): void {
    this.getUnidad();
  }

  getUnidad() {
    this.UnidadesSvc.getUnidad().subscribe({
      next: value => { this.unidad = value },
      error: err => { this.alert('Error al cargar las materias: ') }
    }
    );
  }

  eliminarPrevia(x: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
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
        this.UnidadesSvc.eliminarPrevia(x).subscribe({
          next: value => { console.log(value), this.getUnidad(); },
          error: err => { this.alert("error al eliminar la previa de esta unidad"); },
        }
        );
      }
    })
  }

  eliminarUnidad(id: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      buttonsStyling: true
    })

    swalWithBootstrapButtons.fire({
      title: 'Estás seguro?',
      text: "Esta acción no se puede revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.UnidadesSvc.eliminarUnidad(id).subscribe({
          next: value => console.log(value),
          error: err => { this.alert('Error al cargar las materias: ') }

        });
        this.router.navigate(['/unidades']);
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
