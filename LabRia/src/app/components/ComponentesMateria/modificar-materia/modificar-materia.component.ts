import { Component, OnInit } from '@angular/core';
import{Materia} from '../../../models/materia';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MateriaService} from '../../../services/materia.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-materia',
  templateUrl: './modificar-materia.component.html',
  styleUrls: ['./modificar-materia.component.css']
})
export class ModificarMateriaComponent implements OnInit {
  materia: Materia = new Materia();
  formMateria = new FormGroup ({
    nombre: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    creditos: new FormControl('', Validators.required),
    });

  constructor(private service: MateriaService,private router:Router ) { }
  ngOnInit(): void {
    this.materia = this.service.editarMateriaObtener();
  }

  editarMateria(){
    let n = new Materia();
    n.id = this.materia.id;
    n.nombre = this.formMateria.controls["nombre"].value;
    n.descripcion = this.formMateria.controls["descripcion"].value;
    n.creditosMinimos = this.formMateria.controls["creditos"].value;
    this.service.editarMateria(n).subscribe({
      next: value => console.log(value),
      error: err => { this.alert('Error al agregar las noticias: ') }
    });
    this.router.navigate(['/materia']);
  }

  alert(x:string):void{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: x,
    })
   }

}
