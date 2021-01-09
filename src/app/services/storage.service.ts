import { DocumentoData } from '../models/user-data';
import { EstadoDocumento } from '../enums/estado-documento.e';
import { TipoDeDocumento } from './../enums/tipo-de-documento.e';
import { AngularFirestore } from '@angular/fire/firestore';
import { FileTopics } from './../enums/file-topics.e';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: AngularFireStorage, private auth: AuthService, private firestore: AngularFirestore) { }

  uploadFile(topic: FileTopics, file: File, fileName: string): AngularFireUploadTask {
    const uid = this.auth.user$.getValue().uid;
    const extention = this.getFileNameExtention(file.name);
    return this.storage.upload(`${topic}/${uid}/${fileName}.${extention}`, file);
  }

  private getFileNameExtention(fileName: string): string {
    const splitedName = fileName.split('.');
    return splitedName[splitedName.length - 1];
  }

  changeDocumentState(documentType: TipoDeDocumento, estado: EstadoDocumento, uid?: string): void {
    if (!uid) {
      uid = this.auth.user$.getValue().uid;
    }
    const documentos: { [key: number]: DocumentoData } = this.auth.data$.getValue().documentos || {};
    documentos[documentType] = { estado, uploaded_at: firebase.firestore.Timestamp.now() };

    if (uid) {
      this.firestore.collection('users').doc(uid).set(
        { documentos }, { merge: true }
      );
    }
  }

  async getDownloadUrl(topic: FileTopics, fileName: string, uid: string): Promise<any> {
    const documents = await this.storage.ref(`${topic}/${uid}`).listAll().toPromise();
    for (const document of documents.items) {
      if (document.name.startsWith(fileName)) {
        return document.getDownloadURL();
      }
    }
    return Promise.reject();
  }
}
