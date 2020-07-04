import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Usuario } from 'src/app/models/usuario';
import { Admin } from 'src/app/models/Admin';

@Component({
  selector: 'app-admin-crear-user',
  templateUrl: './admin-crear-user.component.html',
  styleUrls: ['./admin-crear-user.component.css']
})
export class AdminCrearUserComponent implements OnInit {

  constructor(
    public router: Router, 
    private usuarioService : UsuarioService, 
    private ruta: ActivatedRoute,
    private proyectoService: ProyectoService,

    ) { }

  ngOnInit(): void {
  }

  nuevoUser(correo: string, nombre: string, apellido: string, sexo: string, habilidadesTecnicas: string){
    this.usuarioService.nuevoUsuario({correo,nombre,apellido,sexo,habilidadesTecnicas} as Usuario)
     .subscribe();
     alert("Usuario " + nombre + " " + apellido + " creado con éxito. El usuario recibirá un email con su contraseña.");
  }

  nuevoAdmin(correoAdmin: string, passwordAdmin: string){
    this.usuarioService.nuevoAdmin({correoAdmin, passwordAdmin} as Admin)
     .subscribe();
     alert("El administrador ha sido creado con éxito y recibirá un email.");
  }

  cerrarSesion(){
    this.usuarioService.logoutUser();
    this.router.navigate(['']);
  }
  

}

