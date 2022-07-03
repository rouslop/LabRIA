import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/models/materia';
import { MateriaService } from 'src/app/services/materia.service';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {

  materias: Materia[] = [];
  token = localStorage.getItem('token');
  constructor(private MateriaService: MateriaService) { }

  ngOnInit(): void {
    this.getListMaterias();
  }
  
  eliminarMateria(x: any){
    this.ngOnInit();
      this.MateriaService.eliminarMateria(x).subscribe(data => {
        console.log(data);
      });
    this.ngOnInit();
  }

  getListMaterias() {
    this.MateriaService.getMaterias().subscribe({
      next: value => this.materias = value,
      error: err => { alert('Error al cargar las materias: ' + err) }
    }
    );
  }

}
