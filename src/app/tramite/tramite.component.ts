import { Component, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import firebase from 'firebase';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { EstadoDocumento } from '../enums/estado-documento.e';
import { FileTopics } from '../enums/file-topics.e';
import { DocumentoData, UserData } from '../models/user-data';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import {
  Documento,
  TipoDeTramite,
  Tramite,
  tramites,
} from '../static-data/documentos';
import { TipoDeDocumento } from './../static-data/documentos';

@Component({
  selector: 'app-tramite',
  templateUrl: './tramite.component.html',
  styleUrls: ['./tramite.component.scss'],
})
export class TramiteComponent implements OnDestroy {
  tramite: Tramite;
  documentToUpload: TipoDeDocumento;
  documentSubscription: Subscription;
  uploadProgress: Observable<number>;
  userData: UserData;
  EstadoDocumento = EstadoDocumento;
  link: string;

  constructor(
    private storage: StorageService,
    private auth: AuthService,
    private snackbar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    this.route.data.pipe(take(1)).subscribe((data) => {
      const tipoTramite: TipoDeTramite = data.tramite;
      this.link = data.link;
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

    this.documentSubscription = this.auth.data$.subscribe(
      (userData: UserData) => (this.userData = userData)
    );
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
      var documentos: Documento[] = [].concat.apply(
        [],
        this.tramite.documentGroups.map((g) => g.documentos)
      );
      const document = documentos.find((d) => d.tipo === this.documentToUpload);
      const file = fileList.item(0);
      console.log(file);
      const task = this.storage.uploadFile(
        this.tramite.topic,
        file,
        document.name.split(' ').join('-')
      );
      this.uploadProgress = task.percentageChanges();
      task.then(async (task: firebase.storage.UploadTaskSnapshot) => {
        // this.storage.changeDocumentState(
        //   this.documentToUpload,
        //   EstadoDocumento.Pendiente,
        //   null,
        //   task.ref
        // );
        const newDocument: DocumentoData = {
          estado: EstadoDocumento.Pendiente,
          tipo: this.documentToUpload,
          path: task.ref.fullPath,
          uploaded_at: firebase.firestore.Timestamp.now(),
          url: await task.ref.getDownloadURL(),
        };
        this.storage.addFileToFirestore(this.userData, newDocument);
        this.uploadProgress = undefined;
        event.target.value = '';
        this.snackbar.open(
          `Se ha subido correctamente su ${document.name}`,
          null,
          { duration: 5000, panelClass: 'snackbar-success' }
        );
      });
    }
  }

  download(documento: Documento): void {
    const doc = this.userData.documentos[documento.tipo];
    const link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = doc.url;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  goToTescha(): void {
    window.open(this.link, '_blank');
  }
}
