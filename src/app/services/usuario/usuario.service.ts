 import { Injectable } from '@angular/core';
import { usuario } from 'src/app/modelos/usuario.models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urlServicios } from 'src/app/config/config';

import swal from 'sweetalert';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  //si esta autehenticado el usuario , vamos a verifcar si existe el token
  user:usuario;
  token:string = '';

  constructor( public _shttp: HttpClient, public _sRouter:Router) {
    console.log('Servicio de usuario listo! woo!')

   }

crealo( usuario:usuario ){
  let url = urlServicios + "/usuario";
  //tube un problema en :https://stackoverflow.com/questions/54889000/sweetalert-with-angular-7
  return this._shttp.post(url,usuario).pipe(
    map( ( resp:any )=>{
      swal('Usuario creado', usuario.email, 'success' );
      return resp.usuario
    })//map
  )//pipw
}

logeo(usuario:usuario, recuerdame:boolean = false ){
  if( recuerdame){
    localStorage.setItem('email',usuario.email);
  }else{
    localStorage.removeItem('email');
  }

  let url = urlServicios + "/login";
  return this._shttp.post(url,usuario).pipe(
    map((rep:any)=>{
      this.saveStorage(rep.id,rep.token,rep.bodi)

      return true;
    })//fin map
  )//fin del pipe
}

logeoGoogle(token:string){
  let url = urlServicios + "/login/google";
  //ESTO MANDA POR EL BODY
  return this._shttp.post(url,{TOKENSASO:token}).pipe(
    map((rep:any)=>{
      this.saveStorage(rep.usuario._id,rep.token,rep.usuario)

      return true;
    })//fin map
  )//fin del pipe

}


saveStorage(id:string,token:string,usuario:usuario){
  localStorage.setItem('id',id);
  localStorage.setItem('token',token);
  localStorage.setItem('usuario',JSON.stringify(usuario));
  this.user = usuario
  this.token = token
}

estaLogueado(){
  //si exste token esta logeado , si no  no;
  console.log(this.token)
  if(this.token != ''){
    return true
  }else{
    return false
  }
}

logout(){
  this.user= null;
  this.token='';
  localStorage.removeItem ('token');
  localStorage.removeItem('usuario');
  this._sRouter.navigate(['/login']);
  
}





}
