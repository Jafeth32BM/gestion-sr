import { DocumentoData } from '../models/user-data';
import { Component, Input } from '@angular/core';
import { FileTopics } from '../enums/file-topics.e';
import { UserData } from '../models/user-data';
import { StorageService } from '../services/storage.service';
import { Documento, Tramite } from '../static-data/documentos';
import { EstadoDocumento } from '../enums/estado-documento.e';

@Component({
  selector: 'app-student-profile-tramite',
  templateUrl: './student-profile-tramite.component.html',
  styleUrls: ['./student-profile-tramite.component.scss']
})
export class StudentProfileTramiteComponent {
  EstadoDocumento = EstadoDocumento;
  @Input() tramite: Tramite;
  uploadedFiles = new Map<number, DocumentoData>();
  userData: UserData;
  @Input('userData') set userDataChange(userData: UserData) {
    this.userData = userData;
    if (userData) {
      this.checkUploadedFiles(userData.documentos || []);
    } else {
      this.uploadedFiles.clear();
    }
  }

  constructor(private storage: StorageService) { }

  private checkUploadedFiles(docList: { [key: number]: DocumentoData }): void {
    const map = new Map<number, DocumentoData>();
    for (const doc of this.tramite.documentos) {
      map.set(doc.tipo, docList[doc.tipo]);
    }
    this.uploadedFiles = map;
  }

  async download(documento: Documento): Promise<void> {
    const url = await this.storage
      .getDownloadUrl(FileTopics.Residencia, documento.name.split(' ').join('-'), this.userData.uid);
    const link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = url;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  aceptarDocumento(documento: Documento): void {
    console.log(documento);
    this.storage.changeDocumentState(documento.tipo, EstadoDocumento.Aceptado, this.userData.uid);
  }

  rechazarDocumento(documento: Documento): void {
    this.storage.changeDocumentState(documento.tipo, EstadoDocumento.Rechazado, this.userData.uid);
  }

}
