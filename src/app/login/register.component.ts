import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../services/service.indice';
import {usuario} from '../modelos/usuario.models' 
import { Router } from '@angular/router';

//import swal from 'sweetalert';
//import * as swal from 'sweetalert';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {
  desabilitado: boolean = true;
  temporal:boolean = true;

  usuario:usuario;

permitidos = /(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z])/;

  checkStatus($event){

    this.temporal = !$event.target.checked;
    if( this.datosForma.value.password !=null && this.datosForma.value.password2 != null ){
      this.desabilitado = this.temporal
     // console.log('cheked',this.desabilitado);
    }else{
     // console.log('llene los passwords!');
      
    }
       
  }

  status2($e){
    if( this.datosForma.value.password !=null && this.datosForma.value.password2 != null    ){
      this.desabilitado =  this.temporal
     // console.log('de passwords',this.desabilitado);
      
    }
  }

  datosForma :FormGroup;

  constructor( private _sUSuarios:UsuarioService,
               private _sRouter:Router     ) { }

  ngOnInit() {
    this.datosForma = new FormGroup({
      nombre:new FormControl(null,Validators.required ),
      email:new FormControl(null , [Validators.email, Validators.required] ),
      password:new FormControl(null, Validators.required ),
      password2:new FormControl(null,Validators.required),
      condiciones:new FormControl(false), //pop up me podri impedir 

    }  ,  {validators: this.comparador('password','password2')} )

    //this.registralo();
  }

  registralo(){
     this.usuario = new usuario(
      this.datosForma.value.nombre,
      this.datosForma.value.email,
      this.datosForma.value.password
    )     
    console.log(this.usuario);
    console.log( this.datosForma )
    

    this._sUSuarios.crealo( this.usuario ).subscribe( (resp)=>{
      console.log('Estamnos en la respuesta que recibe el register')
      console.log(resp);
      this._sRouter.navigate(['./login']);
    
    })
     
  }

  comparador(contraseña1:string,contraseña2:string){
    return ( group :FormGroup)=>{

      let pass1 = group.controls[contraseña1].value;
      let pass2 = group.controls[contraseña2].value;

      if ( pass1 === pass2  ) {
        return {
          sonIguales: true
        };

      }else{
        return {
          sonIguales: false
        };
      }

      
    }
  }





}
