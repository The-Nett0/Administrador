import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor( public _usuarioService:UsuarioService,public _sRouter:Router ){}


  canActivate(){
        
        if(this._usuarioService.estaLogueado()){
          console.log('Se paso por los Guardias');
          return true;
        }else{
          console.log('Bloqueado por Guards');
          this._sRouter.navigate(['/login']);
          return false;
          
        }
    
  }
  

  
}
