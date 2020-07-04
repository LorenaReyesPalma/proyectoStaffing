import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from 'src/app/models/proyecto';

@Component({
  selector: 'app-admincrearproyecto',
  templateUrl: './admincrearproyecto.component.html',
  styleUrls: ['./admincrearproyecto.component.css']
})
export class AdmincrearproyectoComponent {

  

  constructor(
    public router: Router, 
    private usuarioService : UsuarioService, 
    private ruta: ActivatedRoute,
    private proyectoService: ProyectoService,

    ) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.usuarioService.logoutUser();
    this.router.navigate(['']);
  }
  
  crearProyecto(nombreProyecto: string, ubicacion: string, fechaInicio: string, fechaTermino:string){
    this.proyectoService.nuevoProyecto({nombreProyecto,ubicacion,fechaInicio,fechaTermino} as Proyecto)
      .subscribe();
    alert("El proyecto "+ nombreProyecto + " ha sido creado con éxito.")
  }

}
