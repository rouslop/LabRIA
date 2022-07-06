import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Unidades } from 'src/app/models/unidades';
import { UnidadesService } from 'src/app/services/unidades.service';

@Component({
  selector: 'app-unidad',
  templateUrl: './unidad.component.html',
  styleUrls: ['./unidad.component.css']
})
export class UnidadComponent implements OnInit {
  unidad: Unidades= new Unidades;
  token = localStorage.getItem('token');
  constructor(public UnidadesSvc:UnidadesService,private router:Router ) { }

  ngOnInit(): void {
    this.getUnidad();
  }

  getUnidad(){
    this.UnidadesSvc.getUnidad().subscribe({
      next: value => {this.unidad = value},
      error: err => { alert('Error al cargar las materias: ' + err) }
    }
    );
  }

  eliminarUnidad(id:any){
    console.log(this.unidad);

    // this.UnidadesSvc.eliminarUnidad(id).subscribe({
    //   next: value => console.log(value),
    //   error: err => { alert('Error al cargar las materias: ' + err) }
      
    // });
    // this.router.navigate(['/unidades']);
  }

}
