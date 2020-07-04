import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { UserPerfilComponent } from './components/user-perfil/user-perfil.component';

import { AppRoutingModule } from './app-routing.module';
import {Routes, RouterModule} from '@angular/router';
import { AdminCrearUserComponent } from './components/admin-crear-user/admin-crear-user.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppmaterialModule } from './appmaterial/appmaterial.module';
import { AdmincrearproyectoComponent } from './components/admincrearproyecto/admincrearproyecto.component';
import { AdminAsignarProyectoComponent } from './components/admin-asignar-proyecto/admin-asignar-proyecto.component';
import { UserProyectosComponent } from './components/user-proyectos/user-proyectos.component';
import { AdminEliminarUserOProyectoComponent } from './components/admin-eliminar-user-oproyecto/admin-eliminar-user-oproyecto.component';
import { UserCambiarContrasenaComponent } from './components/user-cambiar-contrasena/user-cambiar-contrasena.component';
import { AdminTerminarProyectoComponent } from './components/admin-terminar-proyecto/admin-terminar-proyecto.component';

import { HttpClientModule } from '@angular/common/http'; 
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LogoutGuard } from './guards/logout.guard';
import { CdkColumnDef } from '@angular/cdk/table';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input'; 
import { MatIconModule } from '@angular/material/icon';
import { AdminListaComponent } from './components/admin-lista/admin-lista.component';
import { MatSortModule } from '@angular/material/sort';
import { AdminModificarComponent } from './components/admin-modificar/admin-modificar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    UserPerfilComponent,
    AdminCrearUserComponent,
    AdmincrearproyectoComponent,
    AdminAsignarProyectoComponent,
    UserProyectosComponent,
    AdminEliminarUserOProyectoComponent,
    UserCambiarContrasenaComponent,
    AdminTerminarProyectoComponent,
    AdminListaComponent,
    AdminModificarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppmaterialModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,


  ],
  providers:[CdkColumnDef,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
