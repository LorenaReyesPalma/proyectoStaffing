import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Usuario } from 'src/app/models/usuario';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-admin-lista',
  templateUrl: './admin-lista.component.html',
  styleUrls: ['./admin-lista.component.css']
})
export class AdminListaComponent implements OnInit {

  dataSource;

  displayedColumns: string[] = ['nombre', 'apellido', 'correo', 'sexo', 'enProyecto', 'administrar'];

  constructor(
    public router: Router,
    private usuarioService: UsuarioService,
    private proyectoService: ProyectoService,
    private ruta: ActivatedRoute,
  ) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit(): void {
    this.obtenerUsers();

  }

  obtenerUsers() {
    this.usuarioService.obtenerUsuarios()
      .subscribe(listaUsuarios => {
        this.dataSource = new MatTableDataSource(listaUsuarios);

        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      });
  }

  administrar(id: number){
    console.log(id);
    this.router.navigate(["adminmodificar", id])
  }

  cerrarSesion(){
    this.usuarioService.logoutUser();
    this.router.navigate(['']);
  }
}
