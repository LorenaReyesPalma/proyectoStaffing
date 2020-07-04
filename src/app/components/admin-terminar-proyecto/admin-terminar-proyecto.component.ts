import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from 'src/app/models/proyecto';
import {MatInputModule} from '@angular/material/input'; 

@Component({
  selector: 'app-admin-terminar-proyecto',
  templateUrl: './admin-terminar-proyecto.component.html',
  styleUrls: ['./admin-terminar-proyecto.component.css']
})
export class AdminTerminarProyectoComponent implements OnInit {

  listaProyectos: Proyecto[];

  nombreSeleccionado : string;
  proyectoSeleccionado : string;

  constructor(
    public router: Router, 
    private usuarioService : UsuarioService, 
    private ruta: ActivatedRoute,
    private proyectoService: ProyectoService,

    ) { }

  ngOnInit(): void {
    this.obtenerProyectosActivos();
  }

  obtenerProyectosActivos(){
    this.proyectoService.obtenerProyectosActivos()
      .subscribe(response => this.listaProyectos = response);
  }

  terminarProyecto(nombreProyecto: string){
    console.log(this.nombreSeleccionado);
    console.log(nombreProyecto);

    this.proyectoService.terminarProyecto(nombreProyecto)
      .subscribe();
    
    alert("Se ha dado término al proyecto " + nombreProyecto + " exitosamente.")
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