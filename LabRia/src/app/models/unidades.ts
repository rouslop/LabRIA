import {Materia} from './materia';
import {Previas} from './previas';
export class Unidades{
   id: string ="";
   nombre: string ="";
   descripcion: string ="";
   creditos: string ="";
   documento: string ="";
   semestre: string ="";
   materia: Materia | undefined;
   previas: Previas[] = [];
}