import { VerifiedProfileGuard } from './guards/verified-profile.guard';
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
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthenticatedGuard] },
  { path: 'login', component: LoginComponent, canActivate: [NotAuthenticatedGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [NotAuthenticatedGuard] },
  { path: 'servicio-social', component: ServicioSocialComponent, canActivate: [AuthenticatedGuard, VerifiedProfileGuard] },
  {
    path: 'servicio-social-admin',
    component: AdminServicioSocialComponent,
    canActivate: [AuthenticatedGuard, VerifiedProfileGuard, AdminGuard]
  },
  { path: 'residencia-admin', component: AdminResidenciaComponent, canActivate: [AuthenticatedGuard, VerifiedProfileGuard, AdminGuard] },
  { path: 'residencia', component: ResidenciaComponent, canActivate: [AuthenticatedGuard, VerifiedProfileGuard] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
