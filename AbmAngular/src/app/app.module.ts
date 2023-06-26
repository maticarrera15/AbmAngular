import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoEstudianteComponent } from './components/nuevo-estudiante/nuevo-estudiante.component';
import { ActualizarEstudianteComponent } from './components/actualizar-estudiante/actualizar-estudiante.component';
import { ListarEstudianteComponent } from './components/listar-estudiante/listar-estudiante.component';
import { LoginEstudianteComponent } from './components/login-estudiante/login-estudiante.component';
import { RegistrarEstudianteComponent } from './components/registrar-estudiante/registrar-estudiante.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    NuevoEstudianteComponent,
    ActualizarEstudianteComponent,
    ListarEstudianteComponent,
    LoginEstudianteComponent,
    RegistrarEstudianteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
