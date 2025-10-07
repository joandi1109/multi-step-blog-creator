"use client";
import { Box, Typography } from "@mui/material";
import FormField from "../FormField";

export default function StepContent({ data = {}, update = () => {}, errors = {} }) {
  const handleChange = (e) => update({ [e.target.name]: e.target.value });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.3 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#000" }}>
          Blog Content
        </Typography>
        <FormField
          name="content"
          value={data.content || ""}
          onChange={handleChange}
          multiline
          rows={6}
          required
          error={!!errors.content}
        />
        {errors.content && (
          <Typography variant="caption" sx={{ color: "error.main", mt: 0.2 }}>
            {errors.content}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
