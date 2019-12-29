import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any =[
    {
      titulo:"Principal",
      icono:'mdi mdi-gauge',
      submenu:[
        {titulo:'Dashboard',url:'/dashboard'},
        {titulo:'ProgressBArra',url:'/progress'},
        {titulo:'Graficas',url:'/graficas1'},
        {titulo:'Promesas',url:'/promesas'},
        {titulo:'fcprmex',url:'/fcrpmex'},

       
      ]
    }
  ];

  constructor() { }
}
