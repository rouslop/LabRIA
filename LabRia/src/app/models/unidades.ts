import {Materia} from './materia';
import {Previa} from './previas';
export class Unidades{
   id: string | undefined;
   nombre: string | undefined;
   descripcion: string | undefined;
   creditos: string | undefined;
   documento: string | undefined;
   semestre: string | undefined;
   materia: Materia | undefined;
   previas: Previa[] | undefined;
}