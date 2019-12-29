import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, timer, interval , of, throwError, Subscriber, Subscription } from 'rxjs';
import { map, tap, retryWhen, delayWhen,mergeMap,retry,filter } from 'rxjs/operators';



@Component({
  selector: 'app-fcrpmex',
  templateUrl: './fcrpmex.component.html',
  styleUrls: ['./fcrpmex.component.css']
})
export class FcrpmexComponent implements OnInit ,OnDestroy {

  subcricion :Subscription;

  constructor() {
    
   this.subcricion = this.regresaObservable().pipe( retry(2) ).subscribe( val=>{console.log(val)} ) //hemos hecho la refercia al la subsricion

  
  }//fon contrucotr
   

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log('la pagina se va cerrar')
    this.subcricion.unsubscribe();
  }

  regresaObservable():Observable<any>  {
    
    return new Observable (  (ola:Subscriber<any>)=>{
      let contador = 0;
      let intervalo2 = setInterval( ()=>{

        contador += 1;
        const salida = {
          valor:contador
        }

        ola.next(salida);

       
       
      },1000)

      
    }).pipe( 
      map(  resp => {
      return resp.valor
      })




    )
 
    
  }//fin de la funcion

}
