import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoEstudianteComponent } from './components/nuevo-estudiante/nuevo-estudiante.component';
import { ActualizarEstudianteComponent } from './components/actualizar-estudiante/actualizar-estudiante.component';
import { ListarEstudianteComponent } from './components/listar-estudiante/listar-estudiante.component';
import { LoginEstudianteComponent } from './components/login-estudiante/login-estudiante.component';
import { RegistrarEstudianteComponent } from './components/registrar-estudiante/registrar-estudiante.component';

const routes: Routes = [
  {
    path: 'agregar',
    component: NuevoEstudianteComponent,
  },
  {
    path: 'edit/:id',
    component: ActualizarEstudianteComponent,
  },
  {
    path: 'listar',
    component: ListarEstudianteComponent,
  },
  {
    path: 'login',
    component: LoginEstudianteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
