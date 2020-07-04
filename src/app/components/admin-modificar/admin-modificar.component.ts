import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Usuario } from 'src/app/models/usuario';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoAsignado } from 'src/app/models/proyectoAsignado';
import { isNullOrUndefined } from 'util';
import { AdminService } from 'src/app/services/admin.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-admin-modificar',
  templateUrl: './admin-modificar.component.html',
  styleUrls: ['./admin-modificar.component.css']
})
export class AdminModificarComponent implements OnInit {

  @Input() usuario: Usuario;

  estaEnProyecto: boolean;

  mostrarAsignar: boolean;
  mostrarEliminar: boolean;

  proyectoSeleccionado: string;
  usuarioSeleccionado: string;

  listaProyectos: Proyecto[];

  constructor(
    public router: Router,
    private usuarioService: UsuarioService,
    private ruta: ActivatedRoute,
    private proyectoService: ProyectoService,
    private adminService: AdminService,
    private location: Location,


  ) { }

  ngOnInit(): void {
    this.obtenerInfoUser();
    this.obtenerProyectosActivos();

  }

  obtenerInfoUser() {
    const id = +this.ruta.snapshot.paramMap.get('id_Usuario');

    this.usuarioService.obtenerUsuarioPorId(id)
      .subscribe(usuario => {
        this.usuario = usuario;

        if (this.usuario.enProyecto == "SI") {
          this.estaEnProyecto = true;
        } else if (this.usuario.enProyecto = "NO") {
          this.estaEnProyecto = false;
        }
      });
  }

  obtenerProyectosActivos() {
    this.proyectoService.obtenerProyectosActivos()
      .subscribe(response => this.listaProyectos = response);
  }

  mostrarAsignarProyecto() {

    if (this.mostrarEliminar = true) {
      this.mostrarEliminar = false;
    }

    this.mostrarAsignar = !this.mostrarAsignar;
  }

  mostrarEliminarUsuario() {

    if (this.mostrarAsignar = true) {
      this.mostrarAsignar = false;
    }

    this.mostrarEliminar = !this.mostrarEliminar;
  }

  asignarProyecto(nombreProyecto: string, correoUsuario: string, cargo: string) {

    if (isNullOrUndefined(nombreProyecto) || isNullOrUndefined(correoUsuario) || isNullOrUndefined(cargo)) {
      alert("Ingrese los datos necesarios para asignar el proyecto.")

    } else {
      this.proyectoService.asignarProyecto({ nombreProyecto, correoUsuario, cargo } as ProyectoAsignado)
        .subscribe();

      alert("Proyecto asignado exitosamente!")
      window.location.reload();
    }
  }

  eliminarUsuario(password: string, correoUser: string) {

    let adminData = JSON.parse(localStorage.getItem("admin"));
    let correo = adminData.correo;

    let adminResponse;

    this.adminService.validarAdmin({ correo, password } as Usuario)
      .subscribe(res => {

        adminResponse = res;

        if (isNullOrUndefined(adminResponse)) {
          alert("La contraseña ingresada es inválida");

        } else {

          this.usuarioService.eliminarUsuario(correoUser)
            .subscribe();

          alert("Se ha eliminado el usuario " + correoUser + " exitosamente.");
          this.location.back();

        }
      });




  }

  cerrarSesion() {
    this.usuarioService.logoutUser();
    this.router.navigate(['']);
  }

}
