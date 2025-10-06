"use client";

import { Box, Typography } from "@mui/material";

export default function StepReview({ data }) {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Review Your Blog Post
      </Typography>

      <Typography sx={{ mt: 2 }}>
        <strong>Title:</strong> {data.title}
      </Typography>
      <Typography>
        <strong>Author:</strong> {data.author}
      </Typography>
      <Typography>
        <strong>Category:</strong> {data.category}
      </Typography>

      <Typography sx={{ mt: 2 }}>
        <strong>Summary:</strong> {data.summary}
      </Typography>
      <Typography sx={{ mt: 2 }}>
        <strong>Content:</strong> {data.content}
      </Typography>
    </Box>
  );
}
