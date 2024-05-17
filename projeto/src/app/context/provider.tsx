import {
  IBrandsModelsAndYear,
  IVeiculo,
  TModelsResponse,
  TYearsResponse,
} from "@/@types";
import { api } from "@/services/api";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { useRouter } from "next/router";
import React, { ReactNode, createContext, useContext, useState } from "react";

export type TabelaFipeType = {
  marcas: Array<IBrandsModelsAndYear> | undefined;
  updateMarcas: Function;
  modelos: Array<IBrandsModelsAndYear> | undefined;
  updateModelos: Function;
  anos: Array<IBrandsModelsAndYear> | undefined;
  updateAnos: Function;
  veiculo: IVeiculo | undefined;
  updateVeiculos: Function;
  loading: boolean;
  setLoading: Function;
  selectedData: {
    marca?: string;
    modelo?: string;
    ano?: string;
  };
  setSelectedData: React.Dispatch<
    React.SetStateAction<{
      marca?: string;
      modelo?: string;
      ano?: string;
    }>
  >;
  fetchModelosByMarca: Function;
  fetchAnosByModelo: Function;
  retrieveVeiculo: Function;
};

export const TabelaFipeContext = createContext<TabelaFipeType>(
  {} as TabelaFipeType
);

export const TabelaFipeProvider = ({ children }: { children?: ReactNode }) => {
  const [marcas, setMarcas] = useState<IBrandsModelsAndYear[] | undefined>();
  const [modelos, setModelos] = useState<IBrandsModelsAndYear[] | undefined>();
  const [anos, setAnos] = useState<IBrandsModelsAndYear[] | undefined>();
  const [veiculo, setVeiculos] = useState<IVeiculo | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedData, setSelectedData] = useState(
    {} as {
      marca?: string;
      modelo?: string;
      ano?: string;
    }
  );

  const updateMarcas = (data: IBrandsModelsAndYear[] | undefined) => {
    setMarcas(data);
    setLoading(false);
  };

  const updateModelos = (data: IBrandsModelsAndYear[] | undefined) => {
    setModelos(data);
    setLoading(false);
  };

  const updateAnos = (data: IBrandsModelsAndYear[] | undefined) => {
    setAnos(data);
    setLoading(false);
  };

  const updateVeiculos = (data: IVeiculo | undefined) => {
    setVeiculos(data);
    setLoading(false);
  };

  const fetchModelosByMarca = async (codigoMarca: string) => {
    setLoading(true);
    const { data } = await api.get<TModelsResponse>(
      `/carros/marcas/${codigoMarca}/modelos`
    );
    setModelos(data.modelos);
    setLoading(false);
  };

  const fetchAnosByModelo = async (codigoModelo: string) => {
    setLoading(true);
    const { data } = await api.get<TYearsResponse>(
      `/carros/marcas/${selectedData.marca}/modelos/${codigoModelo}/anos`
    );

    setAnos(data);
    setLoading(false);
  };

  const retrieveVeiculo = async () => {
    setLoading(true);
    const { data } = await api.get<IVeiculo>(
      `/carros/marcas/${selectedData.marca}/modelos/${selectedData.modelo}/anos/${selectedData.ano}`
    );

    setVeiculos(data);
    setLoading(false);
  };

  return (
    <TabelaFipeContext.Provider
      value={{
        marcas,
        modelos,
        veiculo,
        anos,
        loading,
        selectedData,
        updateMarcas,
        updateModelos,
        updateAnos,
        updateVeiculos,
        setLoading,
        setSelectedData,
        fetchModelosByMarca,
        fetchAnosByModelo,
        retrieveVeiculo,
      }}
    >
      {children}
    </TabelaFipeContext.Provider>
  );
};

export const useTabela = () => useContext(TabelaFipeContext);
