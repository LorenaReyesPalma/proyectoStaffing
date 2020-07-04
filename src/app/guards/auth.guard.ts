import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private usuarioService: UsuarioService, private router: Router){}

  canActivate(): boolean {

    if (this.usuarioService.isAuthenticated()) {
      return true;
    }else{
      
      this.router.navigate(['']);
      return false;
    }
    
  }
  
}
