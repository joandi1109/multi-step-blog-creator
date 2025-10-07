"use client";
import { Box, Typography } from "@mui/material";
import FormField from "../FormField";
import categories from "../../data/categories";

export default function StepSummary({ data = {}, update = () => {}, errors = {} }) {
  const handleChange = (e) => update({ [e.target.name]: e.target.value });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.3 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#000" }}>
          Blog Summary
        </Typography>
        <FormField
          name="summary"
          value={data.summary || ""}
          onChange={handleChange}
          multiline
          rows={4}
          required
          error={!!errors.summary}
        />
        {errors.summary && (
          <Typography variant="caption" sx={{ color: "error.main", mt: 0.2 }}>
            {errors.summary}
          </Typography>
        )}
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.3 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#000" }}>
          Category
        </Typography>
        <FormField
          name="category"
          value={data.category || ""}
          onChange={handleChange}
          select
          options={categories}
          required
          error={!!errors.category}
        />
        {errors.category && (
          <Typography variant="caption" sx={{ color: "error.main", mt: 0.2 }}>
            {errors.category}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
