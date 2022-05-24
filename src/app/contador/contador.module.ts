import { NgModule } from "@angular/core";
import { AppComponent } from '../app.component';
import { ContadorComponent } from './contador/contador.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({

  declarations:[
    AppComponent,
    ContadorComponent
  ],

  imports:[BrowserModule, ContadorModule],

  providers:[],

  bootstrap:[AppComponent]
})

export class ContadorModule{}
