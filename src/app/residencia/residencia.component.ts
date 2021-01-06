import { OrganizationsService } from '../services/organizations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-residencia',
  templateUrl: './residencia.component.html',
  styleUrls: ['./residencia.component.scss']
})
export class ResidenciaComponent implements OnInit {

  constructor(public organizationsService: OrganizationsService) { }

  ngOnInit(): void {
  }

}
