import { Component, OnInit, Input } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-user-cambiar-contrasena',
  templateUrl: './user-cambiar-contrasena.component.html',
  styleUrls: ['./user-cambiar-contrasena.component.css']
})
export class UserCambiarContrasenaComponent implements OnInit {

  @Input() usuario: Usuario;
  @Input() usuario2: Usuario;

  constructor(
    public router: Router,
    private usuarioService: UsuarioService,
    private ruta: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.obtenerInfoUser();
  }

  obtenerInfoUser() {
    const id = +this.ruta.snapshot.paramMap.get('id_Usuario');
    console.log(id);
    this.usuarioService.obtenerUsuarioPorId(id)
      .subscribe(usuario => this.usuario = usuario);
  }

  cerrarSesion() {
    this.usuarioService.logoutUser();
    this.router.navigate(['']);
  }

  navegarProyectos() {
    let usuarioData = JSON.parse(localStorage.getItem("usuario"));
    this.router.navigate(["userproyectos", usuarioData.id_Usuario]);
  }

  navegarPerfil() {
    let usuarioData = JSON.parse(localStorage.getItem("usuario"));
    this.router.navigate(["userperfil", usuarioData.id_Usuario]);
  }

  validarPassword(passwordAntigua: string, passwordNueva: string) {

    let usuarioData = JSON.parse(localStorage.getItem("usuario"));
    const id = usuarioData.id_Usuario;
    let password = passwordAntigua;
    const correo = usuarioData.correo;

    this.usuarioService.validarPasswordUsuario(password).subscribe(userResponse => {
      localStorage.setItem("password", JSON.stringify(userResponse));

      let passwordData = JSON.parse(localStorage.getItem("password"));

      if (passwordData == null || passwordData == 'null' || isNullOrUndefined(passwordData)) {
        localStorage.removeItem("password");
        alert("La contraseña antigua introducida es incorrecta.")
        
      } else {
        password = passwordNueva;
        this.usuarioService.cambiarPasswordUsuario({correo, password} as Usuario).subscribe(userResponse => {
          localStorage.setItem("x", JSON.stringify(userResponse));

          alert("Se ha cambiado tu contraseña exitosamente.");
          localStorage.removeItem("password");
          localStorage.removeItem("x")
        })
      }
    })
  }
}