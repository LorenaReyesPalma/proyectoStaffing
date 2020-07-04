import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from 'src/app/models/proyecto';
import { Usuario } from 'src/app/models/usuario';
import { ProyectoAsignado } from 'src/app/models/proyectoAsignado';

@Component({
  selector: 'app-admin-asignar-proyecto',
  templateUrl: './admin-asignar-proyecto.component.html',
  styleUrls: ['./admin-asignar-proyecto.component.css']
})
export class AdminAsignarProyectoComponent implements OnInit {

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
    this.obtenerUsuariosSinAsignar();
  }

  obtenerProyectosActivos(){
    this.proyectoService.obtenerProyectosActivos()
      .subscribe(response => this.listaProyectos = response);
  }

  obtenerUsuariosSinAsignar(){
    this.usuarioService.obtenerUsuariosSinAsignar()
      .subscribe(response => this.listaUsuarios = response);

  }

  asignarProyecto(nombreProyecto: string, correoUsuario: string, cargo: string){

    this.proyectoService.asignarProyecto({nombreProyecto, correoUsuario, cargo} as ProyectoAsignado)
      .subscribe();
    
    alert("Proyecto asignado exitosamente!")
  }

  cerrarSesion(){
    this.usuarioService.logoutUser();
    this.router.navigate(['']);
  }
  

}
