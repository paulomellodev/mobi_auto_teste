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
        position: "absolute",
        display: loading ? "flex" : "none",
        top: "-137px",
        left: "-745px",
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
