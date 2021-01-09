import { Component, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { EstadoDocumento } from '../enums/estado-documento.e';
import { FileTopics } from '../enums/file-topics.e';
import { UserData } from '../models/user-data';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { Documento, TipoDeTramite, Tramite, tramites } from '../static-data/documentos';
import { TipoDeDocumento } from './../static-data/documentos';

@Component({
  selector: 'app-tramite',
  templateUrl: './tramite.component.html',
  styleUrls: ['./tramite.component.scss']
})
export class TramiteComponent implements OnDestroy {

  tramite: Tramite;
  documentToUpload: TipoDeDocumento;
  documentSubscription: Subscription;
  uploadProgress: Observable<number>;
  userData: UserData;
  EstadoDocumento = EstadoDocumento;

  constructor(private storage: StorageService, private auth: AuthService, private snackbar: MatSnackBar, private route: ActivatedRoute) {
    this.route.data.pipe(take(1)).subscribe((data) => {
      const tipoTramite: TipoDeTramite = data.tramite;
      for (const tramiteKey in tramites) {
        if (Object.prototype.hasOwnProperty.call(tramites, tramiteKey)) {
          const tramite: Tramite = tramites[tramiteKey];
          if (tramite.tipo === tipoTramite) {
            this.tramite = tramite;
            break;
          }
        }
      }
    });

    this.documentSubscription = this.auth.data$
      .subscribe((userData: UserData) => this.userData = userData);
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
      const document = this.tramite.documentos.find((d) => d.tipo === this.documentToUpload);
      const file = fileList.item(0);
      console.log(file);
      const task = this.storage.uploadFile(FileTopics.Residencia, file, document.name.split(' ').join('-'));
      this.uploadProgress = task.percentageChanges();
      task.then(() => {
        this.storage.changeDocumentState(this.documentToUpload, EstadoDocumento.Pendiente);
        this.uploadProgress = undefined;
        event.target.value = '';
        this.snackbar.open(`Se ha subido correctamente su ${document.name}`, null, { duration: 5000, panelClass: 'snackbar-success' });
      });
    }
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

  goToTescha(): void {
    window.open('http://tescha.edomex.gob.mx/residencias_profesionales', '_blank');
  }

}
