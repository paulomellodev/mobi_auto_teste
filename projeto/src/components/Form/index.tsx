"use client";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { SelectInput } from "./Select";

import { splitName } from "@/utils/splitName";
import { useTabela } from "@/app/context/provider";
import { selectOption } from "@/utils/helpers";
import { TBrandsResponse } from "@/@types";
import { useRouter } from "next/navigation";
import Circular from "../Loading";

const Form = ({ marcas }: { marcas: TBrandsResponse }) => {
  const router = useRouter();

  const data = useTabela();

  return (
    <>
      <Stack spacing={1} direction="column" alignItems={"center"}>
        <SelectInput
          id="brand"
          label="Marca"
          options={marcas}
          value={data?.selectedData?.marca ?? ""}
          onChange={(e) => {
            selectOption(e.target.value as string, "marca", data);
            data.fetchModelosByMarca(e.target.value);
          }}
        />
        <SelectInput
          id="model"
          label="Modelo"
          options={data.modelos}
          value={data?.selectedData?.modelo ?? ""}
          onChange={(e) => {
            selectOption(e.target.value as string, "modelo", data);
            data.fetchAnosByModelo(e.target.value);
          }}
        />
        {!!data.anos?.length && (
          <SelectInput
            id="year"
            label="Ano"
            options={splitName(data.anos)}
            value={data.selectedData.ano ?? ""}
            onChange={(e) =>
              selectOption(e.target.value as string, "ano", data)
            }
          />
        )}
        <Button
          variant="contained"
          disabled={!data.selectedData.ano}
          color="primary"
          sx={{
            width: "60%",
            background: "#5d00bf",
            ":hover": { background: "#6c1fbc" },
          }}
          onClick={() => data.retrieveVeiculo()}
        >
          Consultar preço
        </Button>
      </Stack>
      <Circular loading={data.loading} />
    </>
  );
};

export default Form;
