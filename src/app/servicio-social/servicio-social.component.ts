import { AuthService } from './../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserData } from '../models/user-data';
import { stringify } from '@angular/compiler/src/util';

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
    municipioDependencia: new FormControl('', [Validators.required]),
    nombreDependencia: new FormControl('', [Validators.required]),
    nombreResponsable: new FormControl('', [Validators.required]),
    promedioGeneral: new FormControl('', [Validators.required]),
    carrera: new FormControl(''),
    sexo: new FormControl('', [Validators.required]),
    numeroCelular: new FormControl('', [Validators.required]),
    fechaDeInicio: new FormControl('', [Validators.required]),
    fechaDeTermino: new FormControl('', [Validators.required]),
    fechaDeRegistro: new FormControl('', [Validators.required]),
    edad: new FormControl('', [Validators.required]),
    porcentajeDeCreditos: new FormControl('', [Validators.required]),
    sector: new FormControl(''),
    horarioDeServicio: new FormControl('', [Validators.required]),
    nombreDeProyecto: new FormControl('', [Validators.required]),
    estimulo: new FormControl('', [Validators.required]),
    montoDeEstimulo: new FormControl(''),
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
  sectores: string[] = [
    'Publico',
    'Privado',
    'Social',
  ];

  estimulo: string[] = [
    'Con beca',
    'Sin beca',
  ]

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
        municipioDependencia: data.municipioDependencia || '',
        nombreDependencia: data.nombreDependencia || '',
        nombreResponsable: data.nombreResponsable || '',
        promedioGeneral: data.promedioGeneral || null,
        carrera: data.carrera || '',
        sexo: data.sexo || '',
        numeroCelular: data.numeroCelular || null,
        fechaDeInicio: data.fechaDeInicio || '' ,
        fechaDeTermino: data.fechaDeTermino || '' ,
        fechaDeRegistro: data.fechaDeRegistro || '' ,
        edad: data.edad || null,
        porcentajeDeCreditos: data.porcentajeDeCreditos || null,
        sector: data.sector || '',
        horarioDeServicio: data.horarioDeServicio || '',
        nombreDeProyecto: data.nombreDeProyecto ||'',
        estimulo: data.estimulo || '',
        montoDeEstimulo: data.montoDeEstimulo || null,
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
