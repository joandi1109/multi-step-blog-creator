"use client";
import { Box, Typography } from "@mui/material";
import FormField from "../FormField";
import categories from "../../data/categories";

export default function StepSummary({ data, update }) {
  const handleChange = (e) => {
    update({ [e.target.name]: e.target.value });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Blog Summary & Category
      </Typography>
      <FormField
        label="Blog Summary"
        name="summary"
        value={data.summary || ""}
        onChange={handleChange}
        multiline
        rows={4}
        required
      />
      <FormField
        label="Category"
        name="category"
        value={data.category || ""}
        onChange={handleChange}
        select
        options={categories}
        required
      />
    </Box>
  );
}
