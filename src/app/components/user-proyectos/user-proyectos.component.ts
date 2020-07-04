import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { ProyectoDisplay } from 'src/app/models/proyectoDisplay';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-proyectos',
  templateUrl: './user-proyectos.component.html',
  styleUrls: ['./user-proyectos.component.css']
})
export class UserProyectosComponent implements OnInit {

  @Input() usuario: Usuario;
  
  listaDiplays: ProyectoDisplay[];
  dataSource;

  displayedColumns: string[] = ['nombre','fechainicio','fechatermino','ubicacion','cargoejercido'];

  constructor(
    public router: Router, 
    private usuarioService : UsuarioService, 
    private proyectoService : ProyectoService,
    private ruta: ActivatedRoute,
    ) { }

  ngOnInit(): void {
      this.obtenerInfoUser();
      this.obtenerDisplaysProyectos();
  }
    
  obtenerInfoUser(){
    const id = +this.ruta.snapshot.paramMap.get('id_Usuario');
    this.usuarioService.obtenerUsuarioPorId(id)
      .subscribe(usuario => this.usuario=usuario);

    console.log(id);

  }

  obtenerDisplaysProyectos(){
    const id = +this.ruta.snapshot.paramMap.get('id_Usuario');

    this.proyectoService.obtenerDisplaysProyectosDeUser(id)
      .subscribe(listaDiplays => {
        this.dataSource = new MatTableDataSource(listaDiplays);
        
        console.log(this.dataSource);
      });

  }

  navegarPerfil(){
    let usuarioData = JSON.parse(localStorage.getItem("usuario"));
    this.router.navigate(["userperfil", usuarioData.id_Usuario]);
  }

  navegarPassword(){
    let usuarioData = JSON.parse(localStorage.getItem("usuario"));
    this.router.navigate(["userpassword", usuarioData.id_Usuario]);
  }

  cerrarSesion(){
    this.usuarioService.logoutUser();
    this.router.navigate(['']);
  }

}
