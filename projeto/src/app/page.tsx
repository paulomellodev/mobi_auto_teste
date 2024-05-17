import { Box, Container, Typography } from "@mui/material";

import Form from "@/components/Form";
import { api } from "@/services/api";
import { TBrandsResponse } from "@/@types";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Home() {
  const data = await getData();
  return (
    <main>
      <Container
        component="div"
        maxWidth="sm"
        sx={{ height: "100vh", paddingTop: 8 }}
      >
        <Typography
          component="h1"
          variant="h5"
          textAlign={"center"}
          fontWeight="700"
        >
          Tabela Fipe
        </Typography>
        <Typography
          component="h2"
          variant="subtitle1"
          textAlign={"center"}
          fontWeight="700"
        >
          Consulte o valor de um veículo de forma gratuira
        </Typography>
        <Box
          width={"65%"}
          bgcolor="white"
          p={2}
          m="12px auto"
          position={"relative"}
        >
          <Form marcas={data} />
        </Box>
      </Container>
    </main>
  );
}

async function getData() {
  const data = await api
    .get<TBrandsResponse>("/carros/marcas")
    .then((res) => res.data);

  return data;
}
