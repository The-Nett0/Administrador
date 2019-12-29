import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contar().then( (rpta)=>{ console.log(rpta);
     } )
   }//fin constructor

  ngOnInit() {
  }

  contar():Promise<boolean>{
      return new Promise((resolve,reject)=>{
      let contador = 0;
      let intervalo = setInterval( ()=>{   
        
       
        
          contador = contador + 1
          //console.log(contador);
          
          if(contador === 6){
            resolve(true)
            clearInterval( intervalo );
          }

        
      }, 300 );
       
     
    })//fin promesa
    
  }




}
