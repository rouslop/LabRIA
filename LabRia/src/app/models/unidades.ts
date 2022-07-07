import {Materia} from './materia';
import {Previas} from './previas';
export class Unidades{
   id: string | undefined;
   nombre: string ="";
   descripcion: string ="";
   creditos: string ="";
   documento: string ="";
   semestre: string ="";
   materia: Materia | undefined;
   previas: Previas[] = [];

   estaEnPrevias(x:Unidades):boolean{
         if(this.id != x.id){
            for (let i = 0; i < this.previas.length; i++) {
               if (this.previas[i].previa.estaEnPrevias(x)) {
                  return true;
               }
            }
         }else{
            return true;
         }
      return false
   }
}