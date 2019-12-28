import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styleUrls: ['./graficas1.component.css']
})
export class Graficas1Component implements OnInit {
  graficos:any = {
    'graficos1':{
      'Labels':['con frijoles','con natilla','con tocin0'],
      'data':[24,30,46],
      'type':'doughnut',
      'leyenda':'El pan se como con'
    },
  
    'graficos2':{
      'Labels':['Hombres','Mujeres'],
      'data':[4500,6000],
      'type':'doughnut',
      'leyenda':'Entrevistados'
    }
  
  }
  
  orint(){
    console.log(this.graficos);
    
  }
  
  
  constructor() { }

  ngOnInit() {
  }

}
