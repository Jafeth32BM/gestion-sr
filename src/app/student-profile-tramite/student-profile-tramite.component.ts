import { Component, Input } from '@angular/core';
import { DocumentData } from '@angular/fire/firestore';
import { EstadoDocumento } from '../enums/estado-documento.e';
import { FileTopics } from '../enums/file-topics.e';
import { DocumentoData, UserData } from '../models/user-data';
import { StorageService } from '../services/storage.service';
import { Documento, Tramite } from '../static-data/documentos';

@Component({
  selector: 'app-student-profile-tramite',
  templateUrl: './student-profile-tramite.component.html',
  styleUrls: ['./student-profile-tramite.component.scss'],
})
export class StudentProfileTramiteComponent {
  EstadoDocumento = EstadoDocumento;
  @Input() tramite: Tramite;
  @Input() userData: UserData;

  constructor(private storage: StorageService) {}

  async download(documento: Documento): Promise<void> {
    const doc = this.userData.documentos[documento.tipo];
    const link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = doc.url;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  aceptarDocumento(userData: UserData, documento: DocumentoData): void {
    this.storage.validateDocument(userData, documento);
  }

  rechazarDocumento(userData: UserData, documento: DocumentoData): void {
    this.storage.invalidateDocument(userData, documento);
  }
}
