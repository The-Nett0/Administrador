import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ThemeService } from 'ng2-charts';

@Injectable({
  providedIn: 'root'
})
export class AsettingsService {
  ajustes : Ajustes = {
    temillaURL:'assets/css/colors/red-dark.css',
    tema:'default'
  }

  constructor( @Inject(DOCUMENT)  private _document) { 
    this.cargarAjustes();

  }

  cargarAjustes(){
    if( localStorage.getItem('ajustesitos')){
      //aplicar el tma guardado
      this.ajustes = JSON.parse( localStorage.getItem('ajustesitos') );
      this.aplicalo( this.ajustes.tema )

    }else{
      //aplicar el tema por defecto : deafult
      this.aplicalo(this.ajustes.tema)

    }

  }

  aplicalo( paseme:string ){
    let url = `assets/css/colors/${paseme}.css`
    this._document.getElementById( 'temaOut').setAttribute('href',url)

    this.ajustes.tema = paseme;
    this.ajustes.temillaURL = url;
    this.guardarAjustes();

  }

  guardarAjustes(){
    localStorage.setItem('ajustesitos',JSON.stringify(this.ajustes))
  }




}//fin de clase servicio




interface Ajustes{
  temillaURL:string;
  tema:string;
}