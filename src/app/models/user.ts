import { EstadoDocumento } from './../enums/EstadoDocumento.e';
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
  documentos: { [key: number]: DocumentoData };
}

export interface DocumentoData {
  estado: EstadoDocumento;
  uploaded_at: firebase.firestore.Timestamp;
}
