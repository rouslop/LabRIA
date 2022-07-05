import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Unidades} from 'src/app/models/unidades';
import { UnidadesService } from 'src/app/services/unidades.service';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css']
})
export class UnidadesComponent implements OnInit {

  unidades: Unidades[] = [];
  token = localStorage.getItem('token');

  constructor(public UnidadesSvc:UnidadesService,private router:Router) { }

  ngOnInit(): void {
    this.getListUnidades();
  }

  editarUnidad(x:any){
    this.UnidadesSvc.guardarUnidad(x);
    this.router.navigate(['/editarunidad']);
  }
  verUnidad(x:any){
    this.UnidadesSvc.guardarUnidad(x);
    this.router.navigate(['/verunidad']);
  }
  getListUnidades() {
    this.UnidadesSvc.getUnidades().subscribe({
      next: value => this.unidades = value,
      error: err => { alert('Error al cargar las materias: ' + err) }
    }
    );
  }

}
