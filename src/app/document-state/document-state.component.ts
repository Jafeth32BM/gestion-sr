import { Component, Input } from '@angular/core';
import { EstadoDocumento } from '../enums/estado-documento.e';

@Component({
  selector: 'app-document-state',
  templateUrl: './document-state.component.html',
  styleUrls: ['./document-state.component.scss']
})
export class DocumentStateComponent {
  @Input() estado: EstadoDocumento;
  EstadoDocumento = EstadoDocumento;
}
