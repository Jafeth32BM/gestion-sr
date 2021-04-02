import { DocumentoData, UserData } from '../models/user-data';
import { EstadoDocumento } from '../enums/estado-documento.e';
import { AngularFirestore } from '@angular/fire/firestore';
import { FileTopics } from './../enums/file-topics.e';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/storage';

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

  async validateDocument(
    userData: UserData,
    documento: DocumentoData
  ): Promise<void> {
    userData.documentos[documento.tipo].estado = EstadoDocumento.Aceptado;
    if (userData?.uid) {
      this.firestore
        .collection('users')
        .doc(userData.uid)
        .set({ documentos: userData.documentos }, { merge: true });
    }
  }

  async invalidateDocument(
    userData: UserData,
    documento: DocumentoData
  ): Promise<void> {
    userData.documentos[documento.tipo].estado = EstadoDocumento.Rechazado;
    if (userData?.uid) {
      this.firestore
        .collection('users')
        .doc(userData.uid)
        .set({ documentos: userData.documentos }, { merge: true });
    }
  }

  async addFileToFirestore(
    userData: UserData,
    documento: DocumentoData
  ): Promise<void> {
    const uid = this.auth.user$.getValue().uid;
    if (!userData.documentos) {
      userData.documentos = {};
    }
    userData.documentos[documento.tipo] = documento;

    if (uid && !!userData?.documentos) {
      this.firestore
        .collection('users')
        .doc(uid)
        .set({ documentos: userData.documentos }, { merge: true });
    }
  }
}
