import { Documento } from './../models/documento';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TipoDeDocumento } from '../enums/tipo-de-documento.e';
import { FileTopics } from './../enums/file-topics.e';
import { UserData } from './../models/user';
import { AuthService } from './../services/auth.service';
import { StorageService } from './../services/storage.service';

@Component({
  selector: 'app-residencia',
  templateUrl: './residencia.component.html',
  styleUrls: ['./residencia.component.scss']
})
export class ResidenciaComponent implements OnDestroy {
  documents: Documento[] = [
    { name: 'Constancia de creditos', uploaded: false, type: TipoDeDocumento.ConstanciaDeCreditos },
    { name: 'Carta formal', uploaded: false, type: TipoDeDocumento.CartaFormal },
    { name: 'Historial academico', uploaded: false, type: TipoDeDocumento.HistorialAcademico },
    { name: 'Carta responsiva', uploaded: false, type: TipoDeDocumento.CartaResponsiva },
  ];
  documentToUpload: TipoDeDocumento;
  documentSubscription: Subscription;

  constructor(private storage: StorageService, private auth: AuthService) {
    this.documentSubscription = this.auth.data$
      .subscribe((userData: UserData) => {
        if (!userData || !userData.documentosSubidos) {
          return;
        }

        this.documents.forEach((document: Documento) => {
          document.uploaded = userData.documentosSubidos.some((docType: number) => docType === document.type);
        });
      });
  }

  ngOnDestroy(): void {
    if (this.documentSubscription) {
      this.documentSubscription.unsubscribe();
    }
  }

  upload(document: TipoDeDocumento, inputFile): void {
    this.documentToUpload = document;
    inputFile.click();
  }


  fileUpload(event): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file = fileList.item(0);
      console.log(file);
      const task = this.storage.uploadFile(FileTopics.Residencia, file);
      task.then(() => {
        this.storage.confirmUpload(this.documentToUpload);
        event.target.value = '';
      });
    }
  }

  goToTescha(): void {
    window.open('http://tescha.edomex.gob.mx/residencias_profesionales', '_blank');
  }
}
