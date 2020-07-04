import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCrearUserComponent } from './components/admin-crear-user/admin-crear-user.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppmaterialModule } from './appmaterial/appmaterial.module';
import { AdmincrearproyectoComponent } from './components/admincrearproyecto/admincrearproyecto.component';
import { AdminAsignarProyectoComponent } from './components/admin-asignar-proyecto/admin-asignar-proyecto.component';
import { UserProyectosComponent } from './components/user-proyectos/user-proyectos.component';
import { AdminEliminarUserOProyectoComponent } from './components/admin-eliminar-user-oproyecto/admin-eliminar-user-oproyecto.component';
import { UserCambiarContrasenaComponent } from './components/user-cambiar-contrasena/user-cambiar-contrasena.component';
import { AdminTerminarProyectoComponent } from './components/admin-terminar-proyecto/admin-terminar-proyecto.component';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { UserPerfilComponent } from './components/user-perfil/user-perfil.component';
import { HttpClientModule } from '@angular/common/http'; 
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LogoutGuard } from './guards/logout.guard';
import { AdminListaComponent } from './components/admin-lista/admin-lista.component';
import { AdminModificarComponent } from './components/admin-modificar/admin-modificar.component';

const routes: Routes = [
  {path:"", component:LoginPageComponent, canActivate: [LogoutGuard]},
  {path:"userperfil/:id_Usuario", component:UserPerfilComponent, canActivate: [AuthGuard]},
  {path:"userproyectos/:id_Usuario", component:UserProyectosComponent, canActivate: [AuthGuard]},
  {path:"userpassword/:id_Usuario", component:UserCambiarContrasenaComponent, canActivate: [AuthGuard]},
  {path:"admincrearuser", component:AdminCrearUserComponent, canActivate: [AuthGuard] },
  {path:"admincrearproyecto", component:AdmincrearproyectoComponent, canActivate: [AuthGuard]},
  {path:"adminasignarproyecto", component:AdminAsignarProyectoComponent, canActivate: [AuthGuard]},
  {path:"admineliminar", component:AdminEliminarUserOProyectoComponent, canActivate: [AuthGuard]},
  {path:"adminterminarproyecto", component:AdminTerminarProyectoComponent, canActivate: [AuthGuard]},

  {path:"adminlista", component:AdminListaComponent, canActivate: [AuthGuard]},
  {path:"adminmodificar/:id_Usuario", component:AdminModificarComponent, canActivate: [AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
