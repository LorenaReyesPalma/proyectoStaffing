import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { isNullOrUndefined } from 'util';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    public router: Router,
    private usuarioService: UsuarioService,
    private adminService: AdminService) { }

  ngOnInit(): void {
  }

  validarUsuario(correo: string, password: string) {

    if (!correo.trim()) {
      alert("Ingrese su correo.")
    } else if (!password.trim()) {
      alert("Ingrese una contraseña.")
    } else {

      //AGREGANDO USUARIO A LOCALSTORAGE
      this.usuarioService.validarUsuario({ correo, password } as Usuario).subscribe(userResponse => {
        localStorage.setItem("usuario", JSON.stringify(userResponse));
      

      //AGREGANDO ADMIN A LOCALSTORAGE
      this.adminService.validarAdmin({ correo, password } as Usuario).subscribe(userResponse => {
        localStorage.setItem("admin", JSON.stringify(userResponse));
      

      //PASANDOLOS A VARIABLE
      let usuarioData = JSON.parse(localStorage.getItem("usuario"));
      let adminData = JSON.parse(localStorage.getItem("admin"));

      //CHEQUEAR SI ALGUNO DE LOS DOS ES VÁLIDO, SI NO, ENVIAR ALERTA.
      if (usuarioData != null && usuarioData != 'null' && !isNullOrUndefined(usuarioData)) {
        this.router.navigate(["userperfil", usuarioData.id_Usuario]);

      } else if(adminData != null && adminData != 'null' && !isNullOrUndefined(adminData)){
        this.router.navigate(["admincrearproyecto"]);
        
      }else{
        localStorage.removeItem('usuario');
        localStorage.removeItem('admin');
        alert("Usuario o constraseña incorrectos.");
      }
    });
    });
    }
  }
}