import { TipoDeDocumento } from './../static-data/documentos';
import { DocumentoData } from '../models/user-data';
import { EstadoDocumento } from '../enums/estado-documento.e';
import { AngularFirestore } from '@angular/fire/firestore';
import { FileTopics } from './../enums/file-topics.e';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(
    private storage: AngularFireStorage,
    private auth: AuthService,
    private firestore: AngularFirestore
  ) {}

  uploadFile(
    topic: FileTopics,
    file: File,
    fileName: string
  ): AngularFireUploadTask {
    const uid = this.auth.user$.getValue().uid;
    const extention = this.getFileNameExtention(file.name);
    return this.storage.upload(
      `${topic}/${uid}/${fileName}.${extention}`,
      file
    );
  }

  private getFileNameExtention(fileName: string): string {
    const splitedName = fileName.split('.');
    return splitedName[splitedName.length - 1];
  }

  async changeDocumentState(
    documentType: TipoDeDocumento,
    estado: EstadoDocumento,
    uid?: string,
    ref?: firebase.storage.Reference
  ): Promise<void> {
    if (!uid) {
      uid = this.auth.user$.getValue().uid;
    }
    const documentos: { [key: string]: DocumentoData } =
      this.auth.data$.getValue().documentos || {};
    const url = await ref.getDownloadURL();
    documentos[documentType] = {
      estado,
      uploaded_at: firebase.firestore.Timestamp.now(),
      path: ref.fullPath,
      url,
    };

    if (uid) {
      this.firestore
        .collection('users')
        .doc(uid)
        .set({ documentos }, { merge: true });
    }
  }
}
