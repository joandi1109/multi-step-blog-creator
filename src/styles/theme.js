"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#9c27b0" },
    background: { default: "#fafafa" },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h5: { fontWeight: 600 },
    button: { textTransform: "none" },
  },
  shape: { borderRadius: 8 },
});

export default theme;
