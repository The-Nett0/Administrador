import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

 
@ViewChild('txtProgress', {static: false})  txtProgress:ElementRef;
constructor() {

  
  
 }

ngOnInit() {
 // console.log('leyenda oninit', this.Leyenda);
}
@Input() Leyenda:string = 'leyendaaa!'
@Input() porcentaje: number = 50;

@Output() cambio2000: EventEmitter<number> = new EventEmitter();

cambiarValor( valor :number){
if(this.porcentaje >= 100 && valor > 0){
this.porcentaje =  100
return
} if (this.porcentaje <= 0 && valor < 5){
  this.porcentaje =  0
  return
}


this.porcentaje = this.porcentaje + valor
this.cambio2000.emit(this.porcentaje)
}

onChangos( num:number){

// let elemHTML:any = document.getElementsByName('porcentaje')[0];

console.log(this.txtProgress);



 

if(num > 100){
this.porcentaje = 100
}else if(num < 0){
  this.porcentaje = 0
}
else{
   this.porcentaje = num //condicion como el default
}

this.txtProgress.nativeElement.value = this.porcentaje
// elemHTML.value = Number(this.porcentaje)
this.cambio2000.emit(this.porcentaje)
this.txtProgress.nativeElement.focus();
}

}
