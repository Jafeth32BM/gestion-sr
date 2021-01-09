import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasComponent } from './empresas/empresas.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { NotAuthenticatedGuard } from './guards/not-authenticated.guard';
import { VerifiedProfileGuard } from './guards/verified-profile.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ServicioSocialComponent } from './servicio-social/servicio-social.component';
import { TipoDeTramite } from './static-data/documentos';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { TramiteComponent } from './tramite/tramite.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthenticatedGuard] },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotAuthenticatedGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NotAuthenticatedGuard],
  },
  {
    path: 'servicio-social',
    component: ServicioSocialComponent,
    canActivate: [AuthenticatedGuard, VerifiedProfileGuard],
  },
  {
    path: 'lista-alumnos',
    component: StudentListComponent,
    canActivate: [AuthenticatedGuard, VerifiedProfileGuard, AdminGuard],
  },
  {
    path: 'lista-alumnos/perfil',
    component: StudentProfileComponent,
    canActivate: [AuthenticatedGuard, VerifiedProfileGuard, AdminGuard],
  },
  {
    path: 'listado-empresas',
    component: EmpresasComponent,
    canActivate: [AuthenticatedGuard, VerifiedProfileGuard],
  },
  {
    path: 'residencia',
    component: TramiteComponent,
    data: { tramite: TipoDeTramite.Residencia },
    canActivate: [AuthenticatedGuard, VerifiedProfileGuard],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
