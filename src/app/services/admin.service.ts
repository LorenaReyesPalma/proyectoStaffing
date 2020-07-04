import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private URL = 'http://localhost:8080/usuarios/'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  validarAdmin(usuario: Usuario){
    return this.http.post<Usuario>(this.URL+"validaradmin", usuario, this.httpOptions);
  }

}
