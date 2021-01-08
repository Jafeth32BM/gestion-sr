import { Component, Input } from '@angular/core';
import { FileTopics } from '../enums/file-topics.e';
import { Documento } from '../models/documento';
import { UserData } from '../models/user';
import { StorageService } from '../services/storage.service';
import { Tramite } from '../static-data/documentos';

@Component({
  selector: 'app-student-profile-tramite',
  templateUrl: './student-profile-tramite.component.html',
  styleUrls: ['./student-profile-tramite.component.scss']
})
export class StudentProfileTramiteComponent {
  @Input() tramite: Tramite;
  uploadedFiles = new Map<number, boolean>();
  userData: UserData;
  @Input('userData') set userDataChange(userData: UserData) {
    this.userData = userData;
    if (userData) {
      this.checkUploadedFiles(userData.documentosSubidos || []);
    } else {
      this.uploadedFiles.clear();
    }
  }

  constructor(private storage: StorageService) { }

  private checkUploadedFiles(docList: number[]): void {
    const map = new Map<number, boolean>();
    for (const doc of this.tramite.documentos) {
      map.set(doc.tipo, docList.some((id) => id === doc.tipo));
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

}
