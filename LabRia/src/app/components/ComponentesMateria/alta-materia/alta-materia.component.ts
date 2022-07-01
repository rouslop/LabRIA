import { Component, OnInit } from '@angular/core';
import{Materia} from '../../../models/materia';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MateriaService} from '../../../services/materia.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-alta-materia',
  templateUrl: './alta-materia.component.html',
  styleUrls: ['./alta-materia.component.css']
})
export class AltaMateriaComponent implements OnInit {

  formMateria = new FormGroup ({
    nombre: new FormControl('',Validators.required),
    descripcion: new FormControl('',Validators.required),
    creditos: new FormControl('', Validators.required),
    });

  constructor(private service: MateriaService,private router:Router ) { }

  ngOnInit(): void {
  }
  agregarMateria(){
    let n = new Materia();
    n.nombre = this.formMateria.controls["nombre"].value;
    n.descripcion = this.formMateria.controls["descripcion"].value;
    n.creditosMinimos = this.formMateria.controls["creditos"].value;
    this.service.addMaterias(n).subscribe({
      next: value => console.log(value),
      error: err => { alert('Error al agregar las noticias: ' + err) }
    });
    this.router.navigate(['/']);
  }

}
