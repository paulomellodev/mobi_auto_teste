import { IBrandsModelsAndYear } from "@/@types";

export const splitName = (set: IBrandsModelsAndYear[]) => {
  return set.map((value) => ({
    codigo: value.codigo,
    nome: value.nome.split(" ")[0],
  }));
};
