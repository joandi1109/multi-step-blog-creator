"use client";

import { useParams, useRouter } from "next/navigation";
import { Box, Typography, Button, Chip, Container, useTheme } from "@mui/material";
import { useBlog } from "../../../context/BlogContext";
import { formatDate } from "../../../utils/formatDate";

export default function BlogDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const theme = useTheme();
  const { posts } = useBlog();

  const post = posts.find((p) => p.id.toString() === id);

  if (!post) {
    return (
      <Container sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h6" gutterBottom>
          Blog post not found 😢
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            bgcolor: "#648B6B",
            borderRadius: "20px",
            textTransform: "none",
            px: 3,
            "&:hover": { bgcolor: "#55775c" },
          }}
          onClick={() => router.push("/")}
        >
          Back
        </Button>
      </Container>
    );
  }

  const colors = theme.palette.category;
  const colorMap = {
    Tech: colors.tech,
    Lifestyle: colors.lifestyle,
    Business: colors.business,
  };
  const categoryStyle = colorMap[post.category] || colors.default;

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.paper,
        minHeight: "100vh",
        py: 8,
        fontFamily: "var(--font-dm-sans)",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Button
          onClick={() => router.push("/")}
          sx={{
            backgroundColor: "#648B6B",
            color: "#fff",
            borderRadius: 6,
            textTransform: "none",
            px: 2,
            py: 0.5,
            width: "15%",
            alignSelf: "flex-start",
            "&:hover": { backgroundColor: "#55775c" },
          }}
        >
          Back
        </Button>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mt: 1,
          }}
        >
          <Box>
            <Typography
              variant="h4"
              fontWeight={800}
              sx={{ color: "#1e3a8a", mb: 1, letterSpacing: "0.5px" }}
            >
              {post.title.toUpperCase()}
            </Typography>
            <Typography variant="body2" sx={{ color: "#94a3b8", mb: 3 }}>
              {formatDate(post.date)}
            </Typography>
          </Box>

          <Chip
            label={post.category || "Category"}
            sx={{
              backgroundColor: categoryStyle.main,
              color: categoryStyle.contrastText,
              fontWeight: 600,
              borderRadius: "20px",
              px: 1.5,
              py: 0.5,
              fontSize: "0.8rem",
              mt: 0.5,
            }}
          />
        </Box>

        <Box>
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{ mb: 1, color: "#1e293b" }}
          >
            Summary
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 4, lineHeight: 1.7, color: "#334155" }}
          >
            {post.summary}
          </Typography>

          <Typography
            variant="h6"
            fontWeight={700}
            sx={{ mb: 1, color: "#1e293b" }}
          >
            Content
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.7,
              color: "#334155",
              whiteSpace: "pre-line",
            }}
          >
            {post.content}
          </Typography>
        </Box>

        <Typography
          variant="caption"
          sx={{
            display: "block",
            textAlign: "right",
            mt: 6,
            color: "#94a3b8",
            fontSize: "1rem",
          }}
        >
          Author : {post.author}
        </Typography>
      </Container>
    </Box>
  );
}
