import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
  //todo lo que se defina dentro de aqui esta invisible
  //para las declaraciones.
   declarations:[
     HeroeComponent,
     ListadoComponent
   ],
   //cosas visibles a fuera de los modulos
   //los exports son las cosas visibles
   exports:[
     ListadoComponent
   ],
   //aqui van unicamente solo los modulos
   imports:[
     CommonModule
   ]
})
export class HeroesModule{}
