import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

    heroes : string[] = ['Primer','Segundo','Juan','Pedro','Cuarto'];
    heroeBorrado :string = '';


    borrar(){
    console.log('borrando....');
    this.heroeBorrado =  this.heroes.shift() || '';
    }
}
