import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario';
import { isNullOrUndefined } from 'util';
import { ProyectoDisplay } from '../models/proyectoDisplay';
import { Proyecto } from '../models/proyecto';
import { ProyectoAsignado } from '../models/proyectoAsignado';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private URL = 'http://localhost:8080/proyectos/'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient) { }

  obtenerProyectoActivoDelUser(id: number): Observable<ProyectoDisplay>{
    return this.http.post<ProyectoDisplay>(this.URL+'proyectoactivodeuser', id, this.httpOptions);
  }

  obtenerDisplaysProyectosDeUser(id: number): Observable<ProyectoDisplay[]>{
    return this.http.post<ProyectoDisplay[]>(this.URL+"proyectosalmacenadosdeuser", id, this.httpOptions);
  }

  nuevoProyecto(proyecto: Proyecto){
    return this.http.post<Proyecto>(this.URL+"nuevoproyecto", proyecto, this.httpOptions);
  }

  obtenerProyectosActivos(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.URL+"listaproyectosactivos");
  }

  terminarProyecto(nombreProyecto: string){
    return this.http.post<Proyecto>(this.URL+"terminarproyecto", nombreProyecto, this.httpOptions);
  }

  eliminarProyecto(nombreProyecto: string){
    return this.http.post<Proyecto>(this.URL+"eliminarproyecto", nombreProyecto, this.httpOptions);
  }

  asignarProyecto(proyectoAsignado: ProyectoAsignado){
    return this.http.post<ProyectoAsignado>(this.URL+"asignarproyecto", proyectoAsignado, this.httpOptions);
  }

}
