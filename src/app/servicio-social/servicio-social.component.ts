import { AuthService } from './../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-servicio-social',
  templateUrl: './servicio-social.component.html',
  styleUrls: ['./servicio-social.component.scss']
})
export class ServicioSocialComponent implements OnInit, OnDestroy {
  servicioSocialForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido1: new FormControl('', [Validators.required]),
    apellido2: new FormControl(''),
    matricula: new FormControl('', [Validators.required]),
    semestre: new FormControl('', [Validators.required]),
  });
  dataSubscription: Subscription;

  constructor(private firestore: AngularFirestore, private auth: AuthService) {

  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.dataSubscription = this.auth.data$.subscribe((data) => {
      this.servicioSocialForm.setValue({
        nombre: data.nombre,
        apellido1: data.apellido1,
        apellido2: data.apellido2,
        matricula: data.matricula,
        semestre: data.semestre,
      });
    });
  }

  save(): void {
    const formData = this.servicioSocialForm.value;
    const uid: string = this.auth.user$.getValue().uid;
    if (uid) {
      this.firestore.collection('users').doc(uid).set(formData, { merge: true });
    }
  }
}
