import { Component, OnInit } from '@angular/core';
import{Materia} from '../../../models/materia';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MateriaService} from '../../../services/materia.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modificar-materia',
  templateUrl: './modificar-materia.component.html',
  styleUrls: ['./modificar-materia.component.css']
})
export class ModificarMateriaComponent implements OnInit {

  formMateria = new FormGroup ({
    nombre: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    creditos: new FormControl('', Validators.required),
    });

  constructor(private service: MateriaService,private router:Router ) { }
    materia: Materia = new Materia();
  ngOnInit(): void {
    this.materia = this.service.editarMateriaObtener();
  }

  editarMateria(){
    let n = new Materia();
    n.nombre = this.formMateria.controls["nombre"].value;
    n.descripcion = this.formMateria.controls["descripcion"].value;
    n.creditosMinimos = this.formMateria.controls["creditos"].value;
    this.service.editarMateria(n).subscribe({
      next: value => console.log(value),
      error: err => { alert('Error al agregar las noticias: ' + err) }
    });
    this.router.navigate(['/materia']);
  }


}
