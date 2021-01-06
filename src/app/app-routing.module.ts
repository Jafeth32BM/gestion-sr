import { AdminResidenciaComponent } from './admin-residencia/admin-residencia.component';
import { AdminServicioSocialComponent } from './admin-servicio-social/admin-servicio-social.component';
import { ResidenciaComponent } from './residencia/residencia.component';
import { ServicioSocialComponent } from './servicio-social/servicio-social.component';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { NotAuthenticatedGuard } from './guards/not-authenticated.guard';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthenticatedGuard] },
  { path: 'login', component: LoginComponent, canActivate: [NotAuthenticatedGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [NotAuthenticatedGuard] },
  { path: 'servicio-social', component: ServicioSocialComponent, canActivate: [AuthenticatedGuard] },
  { path: 'servicio-social-admin', component: AdminServicioSocialComponent, canActivate: [AuthenticatedGuard] },
  { path: 'residencia-admin', component: AdminResidenciaComponent, canActivate: [AuthenticatedGuard] },
  { path: 'residencia', component: ResidenciaComponent, canActivate: [AuthenticatedGuard] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
