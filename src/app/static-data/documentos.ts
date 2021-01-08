import { TipoDeDocumento } from './../enums/tipo-de-documento.e';

export interface Documento {
  tipo: TipoDeDocumento;
  name: string;
}

export interface Documentos {
  ConstanciaDeCreditos: Documento;
  CartaFormal: Documento;
  HistorialAcademico: Documento;
  CartaResponsiva: Documento;
}

export const documents: Documentos = {
  CartaFormal: { tipo: TipoDeDocumento.CartaFormal, name: 'Carta formal' },
  ConstanciaDeCreditos: { tipo: TipoDeDocumento.ConstanciaDeCreditos, name: 'Constancia de creditos' },
  HistorialAcademico: { tipo: TipoDeDocumento.HistorialAcademico, name: 'Historial academico' },
  CartaResponsiva: { tipo: TipoDeDocumento.CartaResponsiva, name: 'Carta responsiva' },
}

export enum TipoDeTramite {
  ServicioSocialOrdinario,
  ServicioSocialComunitario,
  Residencia,
}

export interface Tramite {
  name: string;
  tipo: TipoDeTramite;
  documentos: Documento[];
}

export interface Tramites {
  ServicioSocialOrdinario: Tramite;
  ServicioSocialComunitario: Tramite;
  Residencia: Tramite;
}

export const tramites: Tramites = {
  ServicioSocialOrdinario: { name: 'Servicio social ordinario', tipo: TipoDeTramite.ServicioSocialOrdinario, documentos: [] },
  ServicioSocialComunitario: { name: 'Servicio social comunitario', tipo: TipoDeTramite.ServicioSocialComunitario, documentos: [] },
  Residencia: { name: 'Residencia', tipo: TipoDeTramite.Residencia, documentos: [
    documents.CartaFormal, documents.CartaResponsiva, documents.ConstanciaDeCreditos, documents.HistorialAcademico
  ] }
};
