import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AsettingsService } from 'src/app/services/service.indice';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
 constructor( @Inject(DOCUMENT) private _document,
               public _sajustes:AsettingsService ) {

                }
  ngOnInit() {
    this.colocarCheck();
  }
        
  
  cambiarColor(color:string,linki:any){
    //console.log(linki)
    this.ponelo(linki); //para remover el working y ponerlo
    this._sajustes.aplicalo(color); //aplicar el color
  }

 
  ponelo(linki){
    let selectores:any = document.getElementsByClassName('selector');
    ;
    for ( let element of selectores ){
      element.classList.remove('working');  //classList.remove o add es vanila javascript akkk
    }
    linki.classList.add('working')
  }


 //colocar el check al ue ete guardado ps. 
 colocarCheck(){
   let tema = this._sajustes.ajustes.tema
   let selectorcitos: any = document.getElementsByClassName('selector');
   for (let ref of selectorcitos) {
    if( ref.getAttribute('data-theme') == tema ){
      ref.classList.add('working');
      break;
    }
   }
 }


}//fin de la clase account-settings
