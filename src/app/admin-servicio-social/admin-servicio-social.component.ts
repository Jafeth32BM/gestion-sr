import { RegistrosAlumnosService } from './../services/registros-alumnos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-servicio-social',
  templateUrl: './admin-servicio-social.component.html',
  styleUrls: ['./admin-servicio-social.component.scss']
})
export class AdminServicioSocialComponent {

  constructor(public registrosService: RegistrosAlumnosService) { }

}
