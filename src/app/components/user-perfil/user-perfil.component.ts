import { Component, OnInit, Input } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { ProyectoDisplay } from 'src/app/models/proyectoDisplay';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-user-perfil',
  templateUrl: './user-perfil.component.html',
  styleUrls: ['./user-perfil.component.css']
})
export class UserPerfilComponent implements OnInit {

  @Input() usuario: Usuario;
  @Input() proyectoDisplay: ProyectoDisplay;

  tieneProyectoAsignado: boolean;

  constructor(
    public router: Router,
    private usuarioService: UsuarioService,
    private ruta: ActivatedRoute,
    private proyectoService: ProyectoService,

  ) { }

  ngOnInit(): void {
    this.obtenerInfoUser();
    this.obtenerInfoProyectoDisplay();
  }

  obtenerInfoUser() {
    const id = +this.ruta.snapshot.paramMap.get('id_Usuario');
    this.usuarioService.obtenerUsuarioPorId(id)
      .subscribe(usuario => this.usuario = usuario);
  }

  obtenerInfoProyectoDisplay() {
    const id = +this.ruta.snapshot.paramMap.get('id_Usuario');

    this.proyectoService.obtenerProyectoActivoDelUser(id)
      .subscribe(proyectoDisplay => {
        this.proyectoDisplay = proyectoDisplay

        const proyectoData = JSON.stringify(proyectoDisplay);

        if (isNullOrUndefined(proyectoData)) {
          this.tieneProyectoAsignado = false;
        } else {
          this.tieneProyectoAsignado = true;
        }
      });
  }

  cerrarSesion() {
    this.usuarioService.logoutUser();
    this.router.navigate(['']);
  }

  navegarProyectos() {
    let usuarioData = JSON.parse(localStorage.getItem("usuario"));
    this.router.navigate(["userproyectos", usuarioData.id_Usuario]);
  }

  navegarPassword() {
    let usuarioData = JSON.parse(localStorage.getItem("usuario"));
    this.router.navigate(["userpassword", usuarioData.id_Usuario]);
  }
}
