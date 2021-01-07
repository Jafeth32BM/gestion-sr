import { TipoDeDocumento } from './../enums/tipo-de-documento.e';

export interface Documento {
  name: string;
  uploaded: boolean;
  type: TipoDeDocumento;
}
