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

   public estaEnPrevias(x:Unidades):boolean {  
      console.log(this.id,x.id)
      if(this.id == x.id){
         return true;
      }else{
         for (let i = 0; i < this.previas.length; i++) {
            if (this.previas[i].previa.estaEnPrevias(x)) {
               return true;
            }
         }
      }
   return false
   }
}