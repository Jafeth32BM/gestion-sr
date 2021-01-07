import { Documento } from './../models/documento';
import { Component, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { TipoDeDocumento } from '../enums/tipo-de-documento.e';
import { FileTopics } from './../enums/file-topics.e';
import { UserData } from './../models/user';
import { AuthService } from './../services/auth.service';
import { StorageService } from './../services/storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  uploadProgress: Observable<number>;

  constructor(private storage: StorageService, private auth: AuthService, private snackbar: MatSnackBar) {
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

  async download(documento: Documento): Promise<void> {
    const url = await this.storage
      .getDownloadUrl(FileTopics.Residencia, documento.name.split(' ').join('-'), this.auth.user$.getValue().uid);
    const link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = url;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }


  fileUpload(event): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const document = this.documents.find((d) => d.type === this.documentToUpload);
      const file = fileList.item(0);
      console.log(file);
      const task = this.storage.uploadFile(FileTopics.Residencia, file, document.name.split(' ').join('-'));
      this.uploadProgress = task.percentageChanges();
      task.then(() => {
        this.storage.confirmUpload(this.documentToUpload);
        this.uploadProgress = undefined;
        event.target.value = '';
        this.snackbar.open(`Se ha subido correctamente su ${document.name}`, null, { duration: 5000, panelClass: 'snackbar-success' });
      });
    }
  }

  goToTescha(): void {
    window.open('http://tescha.edomex.gob.mx/residencias_profesionales', '_blank');
  }
}
