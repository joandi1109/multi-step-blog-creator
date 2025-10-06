"use client";
import { Box, Typography } from "@mui/material";
import FormField from "../FormField";

export default function StepMetadata({ data = {}, update = () => {} }) {
  const handleChange = (e) => {
    update({ [e.target.name]: e.target.value });
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Blog Metadata
      </Typography>

      <FormField
        label="Blog Title"
        name="title"
        value={data.title || ""}
        onChange={handleChange}
        required
      />
      <FormField
        label="Author Name"
        name="author"
        value={data.author || ""}
        onChange={handleChange}
        required
      />
    </Box>
  );
}
