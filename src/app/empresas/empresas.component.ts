import { OrganizationsService } from './../services/organizations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent implements OnInit {

  constructor(public organizationsService: OrganizationsService) { }

  ngOnInit(): void {
  }

}
