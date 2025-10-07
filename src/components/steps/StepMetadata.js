"use client";
import { Box, Typography } from "@mui/material";
import FormField from "../FormField";

export default function StepMetadata({ data = {}, update = () => {}, errors = {} }) {
  const handleChange = (e) => update({ [e.target.name]: e.target.value });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#000" }}>
          Blog Title
        </Typography>

        <FormField
          name="title"
          value={data.title || ""}
          onChange={handleChange}
          required
          error={!!errors.title}
        />

        {errors.title && (
          <Typography variant="caption" sx={{ color: "error.main", mt: 0.3 }}>
            {errors.title}
          </Typography>
        )}
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#000" }}>
          Author Name
        </Typography>

        <FormField
          name="author"
          value={data.author || ""}
          onChange={handleChange}
          required
          error={!!errors.author}
        />

        {errors.author && (
          <Typography variant="caption" sx={{ color: "error.main", mt: 0.3 }}>
            {errors.author}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
