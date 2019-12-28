import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  porcentaje1: number = 50;
  porcentaje2:number = 50;
    constructor() { }
  
    ngOnInit() {
    }
  
  emicion1(e){
   // console.log('primer progress bar');
    this.porcentaje1 = e
    
  //console.log(e);
  
  }
  
  emicion2(a){
    //console.log('segundo progres bar');
  
    
    //console.log(a)
    this.porcentaje2 = a
  }
}
