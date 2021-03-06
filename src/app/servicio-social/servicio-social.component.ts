import { AuthService } from './../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserData } from '../models/user-data';

@Component({
  selector: 'app-servicio-social',
  templateUrl: './servicio-social.component.html',
  styleUrls: ['./servicio-social.component.scss'],
})
export class ServicioSocialComponent implements OnInit, OnDestroy {
  servicioSocialForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido1: new FormControl('', [Validators.required]),
    apellido2: new FormControl(''),
    matricula: new FormControl('', [Validators.required]),
    semestre: new FormControl('', [Validators.required]),
    tipoServicioSocial: new FormControl('', [Validators.required]),
    curp: new FormControl('', [Validators.required]),
    directionDependencia: new FormControl('', [Validators.required]),
    nombreDependencia: new FormControl('', [Validators.required]),
    nombreResponsable: new FormControl('', [Validators.required]),
    promedioGeneral: new FormControl('', [Validators.required]),
    carrera: new FormControl(''),
  });
  dataSubscription: Subscription;
  loading = false;

  carreras: string[] = [
    'Ing. Informatica',
    'Ing. En Sistemas Computacionales',
    'Ing. Industrial',
    'Ing. Electromecanica',
    'ing. Electronica',
  ];

  constructor(
    private firestore: AngularFirestore,
    private auth: AuthService,
    private snackbar: MatSnackBar
  ) {}

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.dataSubscription = this.auth.data$.subscribe((data: UserData) => {
      if (!data) {
        return;
      }

      this.servicioSocialForm.setValue({
        nombre: data.nombre || '',
        apellido1: data.apellido1 || '',
        apellido2: data.apellido2 || '',
        matricula: data.matricula || '',
        semestre: data.semestre || '',
        tipoServicioSocial: data.tipoServicioSocial || '',
        curp: data.curp || '',
        directionDependencia: data.directionDependencia || '',
        nombreDependencia: data.nombreDependencia || '',
        nombreResponsable: data.nombreResponsable || '',
        promedioGeneral: data.promedioGeneral || null,
        carrera: data.carrera || '',
      });
    });
  }

  save(): void {
    const formData = this.servicioSocialForm.value;
    const uid: string = this.auth.user$.getValue().uid;
    if (uid) {
      this.loading = true;
      this.servicioSocialForm.disable();
      this.firestore
        .collection('users')
        .doc(uid)
        .set(formData, { merge: true })
        .then(() => {
          this.snackbar.open('Se ha guardado correctamente', null, {
            duration: 5000,
            panelClass: 'snackbar-success',
          });
        })
        .catch(() => {
          this.snackbar.open(
            'Algo fallo al guardar, verifique su internet e intentelo de nuevo.',
            null,
            { duration: 10000, panelClass: 'snackbar-error' }
          );
        })
        .finally(() => {
          this.loading = false;
          this.servicioSocialForm.enable();
        });
    }
  }
}
