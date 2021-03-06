import { EstadoDocumento } from '../enums/estado-documento.e';
export interface UserData {
  uid: string;
  nombre: string;
  apellido1: string;
  apellido2: string;
  matricula: string;
  semestre: string;
  admin: boolean;
  email: string;
  tipoServicioSocial: 'communitario' | 'ordinario';
  documentos: { [key: string]: DocumentoData };
  curp: string;
  directionDependencia: string;
  nombreDependencia: string;
  nombreResponsable: string;
  promedioGeneral: number;
  carrera: string;
}

export interface DocumentoData {
  estado: EstadoDocumento;
  uploaded_at: firebase.firestore.Timestamp;
  path: string;
  url: string;
}
