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

  uploadFile(topic: FileTopics, file: File): AngularFireUploadTask {
    const uid = this.auth.user$.getValue().uid;
    return this.storage.upload(`${topic}/${uid}/${file.name}`, file);
  }

  confirmUpload(documentType: TipoDeDocumento): void {
    const uid = this.auth.user$.getValue().uid;
    if (uid) {
      this.firestore.collection('users').doc(uid).set(
        { documentosSubidos: firebase.firestore.FieldValue.arrayUnion(documentType) }, { merge: true }
      );
    }
  }
}
