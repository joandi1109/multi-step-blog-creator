"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1976D2" },
    secondary: { main: "#648B6B" },
    background: { default: "#f9fafb", paper: "#ffffff" },
    text: { primary: "#000000", secondary: "#555555" },
    category: {
      tech: { main: "#1976D2", contrastText: "#fff" },
      lifestyle: { main: "#D291BC", contrastText: "#fff" },
      business: { main: "#2E7D32", contrastText: "#fff" },
      default: { main: "#b97c2c", contrastText: "#fff" },
    },
  },

  typography: {
    fontFamily: "'DM Sans', 'Inter', sans-serif",
    h5: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },

  shape: { borderRadius: 8 },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: "1rem",
          "& label": { fontWeight: 600, color: "#000" },
          "& .MuiOutlinedInput-root": {
            borderRadius: 6,
            "& fieldset": { borderColor: "#648B6B" },
            "&:hover fieldset": { borderColor: "#557A5C" },
            "&.Mui-focused fieldset": { borderColor: "#648B6B", borderWidth: 2 },
            "& input, & textarea": {
              fontSize: "0.95rem",
              color: "#000",
              padding: "10px 12px",
            },
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 6,
          padding: "6px 16px",
        },
        containedPrimary: {
          backgroundColor: "#1976D2",
          "&:hover": { backgroundColor: "#1565C0" },
        },
        containedSecondary: {
          backgroundColor: "#648B6B",
          color: "#fff",
          "&:hover": { backgroundColor: "#557A5C" },
        },
        outlinedPrimary: {
          borderColor: "#1976D2",
          color: "#1976D2",
          "&:hover": {
            borderColor: "#1565C0",
            backgroundColor: "rgba(25, 118, 210, 0.04)",
          },
        },
      },
    },
  },
});

export default theme;
