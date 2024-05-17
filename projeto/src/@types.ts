export interface IBrandsModelsAndYear {
  codigo: string;
  nome: string;
}

export interface IVeiculo {
  TipoVeiculo: number;
  Valor: string;
  Marca: string;
  Modelo: string;
  AnoModelo: 2009;
  Combustivel: string;
  CodigoFipe: string;
  MesReferencia: string;
  SiglaCombustivel: string;
}

export type TBrandsResponse = Array<IBrandsModelsAndYear>;

export type TYearsResponse = Array<IBrandsModelsAndYear>;

export type TModelsResponse = {
  modelos: Array<IBrandsModelsAndYear>;
  anos: Array<IBrandsModelsAndYear>;
};

export type TSelectionFipeDataSliceState = {
  value: {
    marca: string;
    modelo: string;
    ano: string;
  };
};
