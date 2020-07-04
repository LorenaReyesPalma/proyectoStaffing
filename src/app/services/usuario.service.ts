import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario';
import { isNullOrUndefined } from 'util';
import { ProyectoDisplay } from '../models/proyectoDisplay';
import { ProyectoAsignado } from '../models/proyectoAsignado';
import { Admin } from '../models/Admin';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private URL = 'http://localhost:8080/usuarios/'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  validarUsuario(usuario: Usuario){

    return this.http.post<Usuario>(this.URL+"validar", usuario, this.httpOptions)
  }

  logoutUser(){
    localStorage.clear();
    return null;
  }

  public isAuthenticated(): boolean{  

    const usuarioData = JSON.parse(localStorage.getItem('usuario'));
    const adminData = JSON.parse(localStorage.getItem('admin'));

    const usuarioIsNull = (usuarioData == null || usuarioData == 'null' || isNullOrUndefined(usuarioData));
    const adminIsNull = (adminData == null ||adminData == 'null' || isNullOrUndefined(adminData));

    if (usuarioIsNull && adminIsNull){
      localStorage.removeItem('usuario');
      localStorage.removeItem('admin');
      return false;

    }else{
      return true;
    }
    
  }

  public isNOTAuthenticated(): boolean{  

    if (localStorage.length == 0){
      return true;
    }else{
      return false;
      
    }
  }

  obtenerUsuarioPorId(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(this.URL+id)
  }

  obtenerUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.URL+"listausers");
  }

  obtenerUsuariosSinAsignar(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.URL+"userssinproyecto");
  }

  validarPasswordUsuario(password: string ): Observable<Usuario>{
    return this.http.post<Usuario>(this.URL+"validarpassword", password, this.httpOptions)
  }

  cambiarPasswordUsuario(usuario: Usuario){
    console.log(usuario.correo);
    console.log(usuario.password);

    return this.http.post<Usuario>(this.URL+"cambiarpassword", usuario, this.httpOptions)
  }

  nuevoUsuario(usuario: Usuario){
    return this.http.post<Usuario>(this.URL+'nuevouser', usuario, this.httpOptions);
  }

  eliminarUsuario(correo: string){
    return this.http.post<Usuario>(this.URL+'eliminaruser', correo, this.httpOptions);

  }
  
  nuevoAdmin(admin: Admin){
    return this.http.post<Admin>(this.URL+"nuevoadmin", admin, this.httpOptions);
  }
}