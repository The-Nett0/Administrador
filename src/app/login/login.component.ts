import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { usuario } from '../modelos/usuario.models';
import { UsuarioService } from '../services/service.indice';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
declare function init_plugins() 
declare const gapi:any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  recuerdame:boolean = false;
  email:string
  auth2:any;
 
  constructor( public _sRouter:Router,
    public _SusuaarioService:UsuarioService  ) { }


  ngOnInit() {
    init_plugins();
    //esto se dispara cada vez qu se entra en esta pantalla
    let email=localStorage.getItem('email') || '';
    this.googleInicio();

  }

  googleInicio(){
    console.log('clck en google');
    
    gapi.load('auth2',()=>{
      this.auth2 = gapi.auth2.init({
        client_id: '970730349182-u34k42hbt5ptei4jn3sghigpolj8cb7q.apps.googleusercontent.com',
        cookiepolicy:'single_host_origin',
        scope: 'profile'
      })
      this.logeoSignIn(document.getElementById('btnGooglecito'));
    })

    
  }//fin googlewinicio


  logeoSignIn(element){

    this.auth2.attachClickHandler(element, {},
      (googleUser)=> {
       
            let profile = googleUser.getBasicProfile().getName();
            let id_token = googleUser.getAuthResponse().id_token;
            console.log(id_token)
          this._SusuaarioService.logeoGoogle(id_token).subscribe((r)=>{
            console.log('ir a dashboard');
            //this._sRouter.navigate(['/dashboard'])
            window.location.href = '#/dashboard'
          })
          

      }, function(error) {
        alert(JSON.stringify(error, undefined, 2));
      });

      

  }

  ingresar(f:NgForm){
     let man = new usuario( null,f.value.email,f.value.password ); //objeto de tipo usuario
      this._SusuaarioService.logeo(man,f.value.recuerdame).subscribe( (r)=>{
        console.log(r);
        //this._sRouter.navigate(['/dashboard'])
        window.location.href = '#/dashboard'
        
      })
  }//fin funcion

  



}
