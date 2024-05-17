import { TabelaFipeType } from "@/app/context/provider";

export const selectOption = (
  codigo: string,
  option: "marca" | "modelo" | "ano",
  functions: TabelaFipeType
) => {
  if (option === "marca") {
    functions.setSelectedData(() => {
      return {
        marca: codigo,
        modelo: undefined,
        ano: undefined,
      };
    });
    functions.updateModelos(undefined);
    functions.updateAnos(undefined);
  }

  if (option === "modelo") {
    functions.setSelectedData((oldState) => {
      return {
        ...oldState,
        modelo: codigo,
        ano: undefined,
      };
    });
    functions.updateAnos(undefined);
  }

  if (option === "ano") {
    functions.setSelectedData((oldState) => {
      return {
        ...oldState,
        ano: codigo,
      };
    });
    functions.updateVeiculos(undefined);
  }
};
