"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../styles/theme";
import "./globals.css";
import { BlogProvider } from "../context/BlogContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BlogProvider>
            {children}
          </BlogProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
