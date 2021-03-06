import { FileTopics } from '../enums/file-topics.e';

export enum TipoDeDocumento {
  RESConstanciaDeCreditos = 'RES: Constancia de creditos',
  RESCartaFormal = 'RES: Carta formal',
  RESHistorialAcademico = 'RES: Hisorial academico',
  RESCartaResponsiva = 'RES: Carta Responsiva',
  SSOInformeMensualDeActividades = 'SSO: Informe mensual de actividades',
  SSOFormotaEvaluacionActividades = 'SSO: Formato de evaluación de las actividades por el prestador de servicio social',
  SSOReporteFinal = 'SSO: Reporte final de servicio social',
  SSOEvidenciaFotografica = 'SSO: Evidencia fotografica',
  SSOFormatoEvaluacionCualitativa = 'SSO: Formato de evaluacion cualitativa del presador del servicio social',
  SSOCartaAceptation = 'SSO: Carta de aceptacion',
  SSOAnexoTecnico = 'SSO: Anexo tecnico',
  SSOCartaTerminacionSS = 'SSO: Carta de terminación de servicio social',
  SSOInformeGlobal = 'SSO: Informe global',
  SSOSolicitudRegistroAutorizacion = 'SSO: Solicitud-registro/autorizacion',
  SSOSolicitudServicioSocial = 'SSO: Solicitud de servicio social',
  SSOReporteBimestralServicioSocial = 'SSO: Reporte bimestral de servicio social',
  SSOCartaCompromisoServicioSocial = 'SSO: carta compromiso del servicio social',
  SSOLiberacionArt2191 = 'SSO: liberación ART 21ó 91',
  SSCSolicitudDeRegistro = 'SSC: Solicitud de registro',
  SSCGuiaEntrevista = 'SSC: Guía de entrevista para candidatos',
  SSCValoracionCompetenciasEspecificas = 'SSC: Valoración de competencias Específicas',
  SSCIneAl200 = 'SSC: INE al 200%',
  SSCCurpAl200 = 'SSC: CURP al 200%',
  SSCHistorialAcademica = 'SSC: Historial Académico',
}

export interface Documento {
  tipo: TipoDeDocumento;
  name: string;
}

export interface DocumentosResidencia {
  ConstanciaDeCreditos: Documento;
  CartaFormal: Documento;
  HistorialAcademico: Documento;
  CartaResponsiva: Documento;
}

export interface DocumentosSSO {
  InformeMensualDeActividades: Documento;
  FormotaEvaluacionActividades: Documento;
  ReporteFinal: Documento;
  EvidenciaFotografica: Documento;
  FormatoEvaluacionCualitativa: Documento;
  CartaAceptation: Documento;
  AnexoTecnico: Documento;
  CartaTerminacionSS: Documento;
  InformeGlobal: Documento;
  SolicitudRegistroAutorizacion: Documento;
  SolicitudServicioSocial: Documento;
  ReporteBimestralServicioSocial: Documento;
  CartaCompromisoServicioSocial: Documento;
  LiberacionArt2191: Documento;
}

export interface DocumentosSSC {
  SolicitudDeRegistro: Documento;
  GuiaEntrevista: Documento;
  ValoracionCompetenciasEspecificas: Documento;
  IneAl200: Documento;
  CurpAl200: Documento;
  HistorialAcademica: Documento;
}

export const documentsRES: DocumentosResidencia = {
  CartaFormal: { tipo: TipoDeDocumento.RESCartaFormal, name: 'Carta formal' },
  ConstanciaDeCreditos: {
    tipo: TipoDeDocumento.RESConstanciaDeCreditos,
    name: 'Constancia de creditos',
  },
  HistorialAcademico: {
    tipo: TipoDeDocumento.RESHistorialAcademico,
    name: 'Historial academico',
  },
  CartaResponsiva: {
    tipo: TipoDeDocumento.RESCartaResponsiva,
    name: 'Carta responsiva',
  },
};

export const documentsSSO: DocumentosSSO = {
  InformeMensualDeActividades: {
    tipo: TipoDeDocumento.SSOInformeMensualDeActividades,
    name: 'Informe mensual de actividades',
  },
  FormotaEvaluacionActividades: {
    tipo: TipoDeDocumento.SSOFormotaEvaluacionActividades,
    name:
      'Formato de evaluación de las actividades por el prestador de servicio social',
  },
  ReporteFinal: {
    tipo: TipoDeDocumento.SSOReporteFinal,
    name: 'Reporte final de servicio social',
  },
  EvidenciaFotografica: {
    tipo: TipoDeDocumento.SSOEvidenciaFotografica,
    name: 'Evidencia fotografica',
  },
  FormatoEvaluacionCualitativa: {
    tipo: TipoDeDocumento.SSOFormatoEvaluacionCualitativa,
    name: 'Formato de evaluacion cualitativa del presador del servicio social',
  },
  CartaAceptation: {
    tipo: TipoDeDocumento.SSOCartaAceptation,
    name: 'Carta de aceptacion',
  },
  AnexoTecnico: {
    tipo: TipoDeDocumento.SSOAnexoTecnico,
    name: 'Anexo tecnico',
  },
  CartaTerminacionSS: {
    tipo: TipoDeDocumento.SSOCartaTerminacionSS,
    name: 'Carta de terminación de servicio social',
  },
  InformeGlobal: {
    tipo: TipoDeDocumento.SSOInformeGlobal,
    name: 'Informe global',
  },
  SolicitudRegistroAutorizacion: {
    tipo: TipoDeDocumento.SSOSolicitudRegistroAutorizacion,
    name: 'Solicitud-registro/autorizacion',
  },
  SolicitudServicioSocial: {
    tipo: TipoDeDocumento.SSOSolicitudServicioSocial,
    name: 'Solicitud de servicio social',
  },
  ReporteBimestralServicioSocial: {
    tipo: TipoDeDocumento.SSOReporteBimestralServicioSocial,
    name: 'Reporte bimestral de servicio social',
  },
  CartaCompromisoServicioSocial: {
    tipo: TipoDeDocumento.SSOCartaCompromisoServicioSocial,
    name: 'carta compromiso del servicio social',
  },
  LiberacionArt2191: {
    tipo: TipoDeDocumento.SSOLiberacionArt2191,
    name: 'liberación ART 21ó 91',
  },
};

export const documentsSSC: DocumentosSSC = {
  SolicitudDeRegistro: {
    tipo: TipoDeDocumento.SSCSolicitudDeRegistro,
    name: 'Solicitud de registro',
  },
  GuiaEntrevista: {
    tipo: TipoDeDocumento.SSCGuiaEntrevista,
    name: 'Guía de entrevista para candidatos',
  },
  ValoracionCompetenciasEspecificas: {
    tipo: TipoDeDocumento.SSCValoracionCompetenciasEspecificas,
    name: 'Valoración de competencias Específicas',
  },
  IneAl200: { tipo: TipoDeDocumento.SSCIneAl200, name: 'INE al 200%' },
  CurpAl200: { tipo: TipoDeDocumento.SSCCurpAl200, name: 'CURP al 200%' },
  HistorialAcademica: {
    tipo: TipoDeDocumento.SSCHistorialAcademica,
    name: 'Historial Académico',
  },
};

export enum TipoDeTramite {
  ServicioSocialOrdinario,
  ServicioSocialComunitario,
  Residencia,
}

export interface Tramite {
  name: string;
  tipo: TipoDeTramite;
  documentos: Documento[];
  topic: FileTopics;
}

export interface Tramites {
  ServicioSocialOrdinario: Tramite;
  ServicioSocialComunitario: Tramite;
  Residencia: Tramite;
}

export const tramites: Tramites = {
  ServicioSocialOrdinario: {
    name: 'Servicio social ordinario',
    topic: FileTopics.ServicioSocialOrdinario,
    tipo: TipoDeTramite.ServicioSocialOrdinario,
    documentos: [
      documentsSSO.InformeMensualDeActividades,
      documentsSSO.FormotaEvaluacionActividades,
      documentsSSO.ReporteFinal,
      documentsSSO.EvidenciaFotografica,
      documentsSSO.FormatoEvaluacionCualitativa,
      documentsSSO.CartaAceptation,
      documentsSSO.AnexoTecnico,
      documentsSSO.CartaTerminacionSS,
      documentsSSO.InformeGlobal,
      documentsSSO.SolicitudRegistroAutorizacion,
      documentsSSO.SolicitudServicioSocial,
      documentsSSO.ReporteBimestralServicioSocial,
      documentsSSO.CartaCompromisoServicioSocial,
      documentsSSO.LiberacionArt2191,
    ],
  },
  ServicioSocialComunitario: {
    topic: FileTopics.ServicioSocialComunitario,
    name: 'Servicio social comunitario',
    tipo: TipoDeTramite.ServicioSocialComunitario,
    documentos: [
      documentsSSC.SolicitudDeRegistro,
      documentsSSC.GuiaEntrevista,
      documentsSSC.ValoracionCompetenciasEspecificas,
      documentsSSC.IneAl200,
      documentsSSC.CurpAl200,
      documentsSSC.HistorialAcademica,
    ],
  },
  Residencia: {
    name: 'Residencia',
    topic: FileTopics.Residencia,
    tipo: TipoDeTramite.Residencia,
    documentos: [
      documentsRES.CartaFormal,
      documentsRES.CartaResponsiva,
      documentsRES.ConstanciaDeCreditos,
      documentsRES.HistorialAcademico,
    ],
  },
};
