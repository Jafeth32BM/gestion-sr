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
  SSDSecundoInformeTrimestral = 'SSD: 2DO. INFORME TRIMESTRAL',
  SSDReporteBimestralBimestre3 = 'SSD: REPORTE BIMESTRAL (BIMESTRE 3)',
  SSDEvidenciaFotograficaBimestre3 = 'SSD: EVIDENCIA FOTOGRÁFICA (BIMESTRE 3)',
  SSDevaluationDeActividadesDelPrestadorBimestre3 = 'SSD: EVALUACION DE ACTIVIDADES DEL PRESTADOR (BIMESTRE 3)',
  SSDAautoevaluacionCualitativaBimestre3 = 'SSD: AUTOEVALUACIÓN CUALITATIVA (BIMESTRE 3)',
  SSDEvaluacionCualitativaBimestre3 = 'SSD: EVALUACIÓN CUALITATIVA (BIMESTRE 3)',
  SSDReporteBimestralBimestre2 = 'SSD: REPORTE BIMESTRAL (BIMESTRE 2)',
  SSDEvidenciaFotograficaBimestre2 = 'SSD: EVIDENCIA FOTOGRÁFICA (BIMESTRE 2)',
  SSDevaluacionDeActividadesDelPrestadorBimestre2 = 'SSD: EVALUACION DE ACTIVIDADES DEL PRESTADOR (BIMESTRE 2)',
  SSDAutoevaluacionCualitativaBimestre2 = 'SSD: AUTOEVALUACIÓN CUALITATIVA (BIMESTRE 2)',
  SSDEvaluacionCualitativaBimestre2 = 'SSD: EVALUACIÓN CUALITATIVA (BIMESTRE 2)',
  SSDPrimerInformeTrimestral = 'SSD: 1ER. INFORME TRIMESTRAL',
  SSDReporteBimestralBimestre1 = 'SSD: REPORTE BIMESTRAL (BIMESTRE 1)',
  SSDEvidenciaFotograficaBimestre1 = 'SSD: EVIDENCIA FOTOGRÁFICA (BIMESTRE 1)',
  SSDevaluacionDeActividadesDelPrestadorBimestre1 = 'SSD: EVALUACION DE ACTIVIDADES DEL PRESTADOR (BIMESTRE 1)',
  SSDAutoevaluacionCualitativaBimestre1 = 'SSD: AUTOEVALUACIÓN CUALITATIVA (BIMESTRE 1)',
  SSDEvaluacionCualitativaBimestre1 = 'SSD: EVALUACIÓN CUALITATIVA (BIMESTRE 1)',
  SSDPlanDeTrabajo = 'SSD: PLAN DE TRABAJO',
  SSDCartaDeAceptacion = 'SSD: CARTA DE ACEPTACIÓN',
  SSDCartaDePresentacion = 'SSD: CARTA DE PRESENTACIÓN (CON SELLO, FECHA Y FIRMA DE RECIBO POR PARTE DE LA ENTIDAD RECEPTORA)',
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

export interface DocumentosSSD {
  SSDSecundoInformeTrimestral: Documento;
  SSDReporteBimestralBimestre3: Documento;
  SSDEvidenciaFotograficaBimestre3: Documento;
  SSDevaluationDeActividadesDelPrestadorBimestre3: Documento;
  SSDAautoevaluacionCualitativaBimestre3: Documento;
  SSDEvaluacionCualitativaBimestre3: Documento;
  SSDReporteBimestralBimestre2: Documento;
  SSDEvidenciaFotograficaBimestre2: Documento;
  SSDevaluacionDeActividadesDelPrestadorBimestre2: Documento;
  SSDAutoevaluacionCualitativaBimestre2: Documento;
  SSDEvaluacionCualitativaBimestre2: Documento;
  SSDPrimerInformeTrimestral: Documento;
  SSDReporteBimestralBimestre1: Documento;
  SSDEvidenciaFotograficaBimestre1: Documento;
  SSDevaluacionDeActividadesDelPrestadorBimestre1: Documento;
  SSDAutoevaluacionCualitativaBimestre1: Documento;
  SSDEvaluacionCualitativaBimestre1: Documento;
  SSDPlanDeTrabajo: Documento;
  SSDCartaDeAceptacion: Documento;
  SSDCartaDePresentacion: Documento;
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

export const documentsSSD: DocumentosSSD = {
  SSDSecundoInformeTrimestral: {
    tipo: TipoDeDocumento.SSDSecundoInformeTrimestral,
    name: '2DO. INFORME TRIMESTRAL',
  },
  SSDReporteBimestralBimestre3: {
    tipo: TipoDeDocumento.SSDReporteBimestralBimestre3,
    name: 'REPORTE BIMESTRAL (BIMESTRE 3)',
  },
  SSDEvidenciaFotograficaBimestre3: {
    tipo: TipoDeDocumento.SSDEvidenciaFotograficaBimestre3,
    name: 'EVIDENCIA FOTOGRÁFICA (BIMESTRE 3)',
  },
  SSDevaluationDeActividadesDelPrestadorBimestre3: {
    tipo: TipoDeDocumento.SSDevaluationDeActividadesDelPrestadorBimestre3,
    name: 'EVALUACION DE ACTIVIDADES DEL PRESTADOR (BIMESTRE 3)',
  },
  SSDAautoevaluacionCualitativaBimestre3: {
    tipo: TipoDeDocumento.SSDAautoevaluacionCualitativaBimestre3,
    name: 'AUTOEVALUACIÓN CUALITATIVA (BIMESTRE 3)',
  },
  SSDEvaluacionCualitativaBimestre3: {
    tipo: TipoDeDocumento.SSDEvaluacionCualitativaBimestre3,
    name: 'EVALUACIÓN CUALITATIVA (BIMESTRE 3)',
  },
  SSDReporteBimestralBimestre2: {
    tipo: TipoDeDocumento.SSDReporteBimestralBimestre2,
    name: 'REPORTE BIMESTRAL (BIMESTRE 2)',
  },
  SSDEvidenciaFotograficaBimestre2: {
    tipo: TipoDeDocumento.SSDEvidenciaFotograficaBimestre2,
    name: 'EVIDENCIA FOTOGRÁFICA (BIMESTRE 2)',
  },
  SSDevaluacionDeActividadesDelPrestadorBimestre2: {
    tipo: TipoDeDocumento.SSDevaluacionDeActividadesDelPrestadorBimestre2,
    name: 'EVALUACION DE ACTIVIDADES DEL PRESTADOR (BIMESTRE 2)',
  },
  SSDAutoevaluacionCualitativaBimestre2: {
    tipo: TipoDeDocumento.SSDAutoevaluacionCualitativaBimestre2,
    name: 'AUTOEVALUACIÓN CUALITATIVA (BIMESTRE 2)',
  },
  SSDEvaluacionCualitativaBimestre2: {
    tipo: TipoDeDocumento.SSDEvaluacionCualitativaBimestre2,
    name: 'EVALUACIÓN CUALITATIVA (BIMESTRE 2)',
  },
  SSDPrimerInformeTrimestral: {
    tipo: TipoDeDocumento.SSDPrimerInformeTrimestral,
    name: '1ER. INFORME TRIMESTRAL',
  },
  SSDReporteBimestralBimestre1: {
    tipo: TipoDeDocumento.SSDReporteBimestralBimestre1,
    name: 'REPORTE BIMESTRAL (BIMESTRE 1)',
  },
  SSDEvidenciaFotograficaBimestre1: {
    tipo: TipoDeDocumento.SSDEvidenciaFotograficaBimestre1,
    name: 'EVIDENCIA FOTOGRÁFICA (BIMESTRE 1)',
  },
  SSDevaluacionDeActividadesDelPrestadorBimestre1: {
    tipo: TipoDeDocumento.SSDevaluacionDeActividadesDelPrestadorBimestre1,
    name: 'EVALUACION DE ACTIVIDADES DEL PRESTADOR (BIMESTRE 1)',
  },
  SSDAutoevaluacionCualitativaBimestre1: {
    tipo: TipoDeDocumento.SSDAutoevaluacionCualitativaBimestre1,
    name: 'AUTOEVALUACIÓN CUALITATIVA (BIMESTRE 1)',
  },
  SSDEvaluacionCualitativaBimestre1: {
    tipo: TipoDeDocumento.SSDEvaluacionCualitativaBimestre1,
    name: 'EVALUACIÓN CUALITATIVA (BIMESTRE 1)',
  },
  SSDPlanDeTrabajo: {
    tipo: TipoDeDocumento.SSDPlanDeTrabajo,
    name: 'PLAN DE TRABAJO',
  },
  SSDCartaDeAceptacion: {
    tipo: TipoDeDocumento.SSDCartaDeAceptacion,
    name: 'CARTA DE ACEPTACIÓN',
  },
  SSDCartaDePresentacion: {
    tipo: TipoDeDocumento.SSDCartaDePresentacion,
    name:
      'CARTA DE PRESENTACIÓN (CON SELLO, FECHA Y FIRMA DE RECIBO POR PARTE DE LA ENTIDAD RECEPTORA)',
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
  documentGroups: DocumentGroup[];
  topic: FileTopics;
}

export interface DocumentGroup {
  groupName?: string;
  documentos: Documento[];
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
    documentGroups: [
      {
        groupName: 'Formatos para iniciar tu servicio social',
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
      {
        groupName: 'Formatos durante tu servicio social',
        documentos: [
          documentsSSD.SSDSecundoInformeTrimestral,
          documentsSSD.SSDReporteBimestralBimestre3,
          documentsSSD.SSDEvidenciaFotograficaBimestre3,
          documentsSSD.SSDevaluationDeActividadesDelPrestadorBimestre3,
          documentsSSD.SSDAautoevaluacionCualitativaBimestre3,
          documentsSSD.SSDEvaluacionCualitativaBimestre3,
          documentsSSD.SSDReporteBimestralBimestre2,
          documentsSSD.SSDEvidenciaFotograficaBimestre2,
          documentsSSD.SSDevaluacionDeActividadesDelPrestadorBimestre2,
          documentsSSD.SSDAutoevaluacionCualitativaBimestre2,
          documentsSSD.SSDEvaluacionCualitativaBimestre2,
          documentsSSD.SSDPrimerInformeTrimestral,
          documentsSSD.SSDReporteBimestralBimestre1,
          documentsSSD.SSDEvidenciaFotograficaBimestre1,
          documentsSSD.SSDevaluacionDeActividadesDelPrestadorBimestre1,
          documentsSSD.SSDAutoevaluacionCualitativaBimestre1,
          documentsSSD.SSDEvaluacionCualitativaBimestre1,
          documentsSSD.SSDPlanDeTrabajo,
          documentsSSD.SSDCartaDeAceptacion,
          documentsSSD.SSDCartaDePresentacion,
        ],
      },
    ],
  },
  ServicioSocialComunitario: {
    topic: FileTopics.ServicioSocialComunitario,
    name: 'Servicio social comunitario',
    tipo: TipoDeTramite.ServicioSocialComunitario,
    documentGroups: [
      {
        groupName: 'Formatos para iniciar tu servicio social',
        documentos: [
          documentsSSC.SolicitudDeRegistro,
          documentsSSC.GuiaEntrevista,
          documentsSSC.ValoracionCompetenciasEspecificas,
          documentsSSC.IneAl200,
          documentsSSC.CurpAl200,
          documentsSSC.HistorialAcademica,
        ],
      },
      {
        groupName: 'Formatos durante tu servicio social',
        documentos: [
          documentsSSD.SSDSecundoInformeTrimestral,
          documentsSSD.SSDReporteBimestralBimestre3,
          documentsSSD.SSDEvidenciaFotograficaBimestre3,
          documentsSSD.SSDevaluationDeActividadesDelPrestadorBimestre3,
          documentsSSD.SSDAautoevaluacionCualitativaBimestre3,
          documentsSSD.SSDEvaluacionCualitativaBimestre3,
          documentsSSD.SSDReporteBimestralBimestre2,
          documentsSSD.SSDEvidenciaFotograficaBimestre2,
          documentsSSD.SSDevaluacionDeActividadesDelPrestadorBimestre2,
          documentsSSD.SSDAutoevaluacionCualitativaBimestre2,
          documentsSSD.SSDEvaluacionCualitativaBimestre2,
          documentsSSD.SSDPrimerInformeTrimestral,
          documentsSSD.SSDReporteBimestralBimestre1,
          documentsSSD.SSDEvidenciaFotograficaBimestre1,
          documentsSSD.SSDevaluacionDeActividadesDelPrestadorBimestre1,
          documentsSSD.SSDAutoevaluacionCualitativaBimestre1,
          documentsSSD.SSDEvaluacionCualitativaBimestre1,
          documentsSSD.SSDPlanDeTrabajo,
          documentsSSD.SSDCartaDeAceptacion,
          documentsSSD.SSDCartaDePresentacion,
        ],
      },
    ],
  },
  Residencia: {
    name: 'Residencia',
    topic: FileTopics.Residencia,
    tipo: TipoDeTramite.Residencia,
    documentGroups: [
      {
        documentos: [
          documentsRES.CartaFormal,
          documentsRES.CartaResponsiva,
          documentsRES.ConstanciaDeCreditos,
          documentsRES.HistorialAcademico,
        ],
      },
    ],
  },
};
