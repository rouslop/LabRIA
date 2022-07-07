import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/models/materia';
import { MateriaService } from 'src/app/services/materia.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {

  materias: Materia[] = [];
  token = localStorage.getItem('token');
  constructor(private MateriaService: MateriaService,private router:Router) { }

  ngOnInit(): void {
    this.getListMaterias();
  }
  
  eliminarMateria(x: any){
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
        this.ngOnInit();
          this.MateriaService.eliminarMateria(x).subscribe(data => {
            console.log(data);
          });
        this.ngOnInit();
      }
    })
  }

  editarMateria(i: any ,n: any ,d: any ,c: any){
      let mat = new Materia();
      mat.id = i;
      mat.nombre = n;
      mat.descripcion = d;
      mat.creditosMinimos = c;
      this.MateriaService.editarMateriaGuardar(mat);
      this.router.navigate(['/editarMateria']);
  }

  getListMaterias() {
    this.MateriaService.getMaterias().subscribe({
      next: value => this.materias = value,
      error: err => { this.alert('Error al cargar las materias: ') }
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
