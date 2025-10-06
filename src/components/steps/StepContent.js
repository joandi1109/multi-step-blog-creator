"use client";
import { Box, Typography } from "@mui/material";
import FormField from "../FormField";

export default function StepContent({ data, update }) {
  const handleChange = (e) => {
    update({ [e.target.name]: e.target.value });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Blog Content
      </Typography>
      <FormField
        label="Blog Content"
        name="content"
        value={data.content || ""}
        onChange={handleChange}
        multiline
        rows={10}
        required
      />
    </Box>
  );
}
