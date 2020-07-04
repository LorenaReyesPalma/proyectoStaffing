import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuard implements CanActivate {

  constructor(private usuarioService: UsuarioService, private router: Router){}

  canActivate(){

    //SI NO HAY NADA EN EL LOCALSTORAGE
    if (this.usuarioService.isNOTAuthenticated()) {
      return true;
      
    }
    return false;
    
  }
  
}
