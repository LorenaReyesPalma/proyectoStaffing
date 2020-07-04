import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from 'src/app/models/proyecto';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-admin-eliminar-user-oproyecto',
  templateUrl: './admin-eliminar-user-oproyecto.component.html',
  styleUrls: ['./admin-eliminar-user-oproyecto.component.css']
})
export class AdminEliminarUserOProyectoComponent implements OnInit {

  listaProyectos: Proyecto[];
  listaUsuarios: Usuario[];
  
  proyectoSeleccionado : string;
  usuarioSeleccionado : string;

  constructor(
    public router: Router, 
    private usuarioService : UsuarioService, 
    private ruta: ActivatedRoute,
    private proyectoService: ProyectoService,

    ) { }

  ngOnInit(): void {
    this.obtenerProyectosActivos();
    this.obtenerUsuarios();
  }

  obtenerProyectosActivos(){
    this.proyectoService.obtenerProyectosActivos()
      .subscribe(response => this.listaProyectos = response);
  }

  obtenerUsuarios(){
    this.usuarioService.obtenerUsuarios()
      .subscribe(response => this.listaUsuarios = response);

  }

  eliminarUsuario(correo: string){

    this.usuarioService.eliminarUsuario(correo)
      .subscribe();
    
    alert("Se ha eliminado el usuario " + correo + " exitosamente.")
  }

  eliminarProyecto(nombreProyecto: string){

    this.proyectoService.eliminarProyecto(nombreProyecto)
      .subscribe();
    
    alert("Se ha eliminado el proyecto " + nombreProyecto + " exitosamente.")
  }

  cerrarSesion(){
    this.usuarioService.logoutUser();
    this.router.navigate(['']);
  }
  

}