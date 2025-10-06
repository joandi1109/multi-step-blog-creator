"use client";

import { Box, Container, Typography, Chip, Paper, Button } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { useBlog } from "../../../context/BlogContext";
import { formatDate } from "../../../utils/formatDate";

export default function BlogDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { posts } = useBlog();

  const post = posts.find((p) => String(p.id) === id);

  if (!post) {
    return (
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h6">Post not found</Typography>
        <Button onClick={() => router.push("/")} sx={{ mt: 2 }}>
          Back to Home
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 5 }}>
      <Paper sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" fontWeight={600} gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          {post.author} — {formatDate(post.date)}
        </Typography>
        <Chip
          label={post.category}
          color="primary"
          sx={{ mt: 2, textTransform: "capitalize" }}
        />
        <Typography sx={{ mt: 3, whiteSpace: "pre-line" }}>
          {post.summary}
        </Typography>
        <Typography sx={{ mt: 4, lineHeight: 1.7 }}>
          {post.content}
        </Typography>

        <Button
          variant="outlined"
          sx={{ mt: 4 }}
          onClick={() => router.push("/")}
        >
          Back to Blog List
        </Button>
      </Paper>
    </Container>
  );
}
