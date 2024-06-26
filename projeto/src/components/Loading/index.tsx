import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

interface ICircularProgress {
  loading: boolean;
}
export default function Circular({ loading }: ICircularProgress) {
  return (
    <Box
      sx={{
        position: "fixed",
        display: loading ? "flex" : "none",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#a9a9a9a9",
        zIndex: "100",
      }}
    >
      <CircularProgress style={{ margin: "auto" }} />
    </Box>
  );
}
