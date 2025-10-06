"use client";

import { Card, CardContent, Typography, Chip } from "@mui/material";
import { useRouter } from "next/navigation";
import { formatDate } from "../utils/formatDate";

export default function BlogCard({ post }) {
  const router = useRouter();

  return (
    <Card
      onClick={() => router.push(`/blog/${post.id}`)}
      sx={{
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": { boxShadow: 6 },
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.author} — {formatDate(post.date)}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {post.summary}
        </Typography>
        <Chip
          label={post.category}
          size="small"
          color="primary"
          sx={{ mt: 2, textTransform: "capitalize" }}
        />
      </CardContent>
    </Card>
  );
}
