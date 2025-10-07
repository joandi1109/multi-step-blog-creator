"use client";

import { Card, CardContent, Typography, Chip, Box, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import { formatDate } from "../utils/formatDate";

export default function BlogCard({ post }) {
  const router = useRouter();
  const theme = useTheme();

  const colors = theme.palette.category;
  const colorMap = {
    Tech: colors.tech,
    Lifestyle: colors.lifestyle,
    Business: colors.business,
  };

  const categoryStyle = colorMap[post.category] || colors.default;

  return (
    <Card
      onClick={() => router.push(`/blog/${post.id}`)}
      sx={{
        cursor: "pointer",
        border: "4px solid #648B6B",
        borderRadius: "12px",
        transition: "all 0.3s ease",
        width: 280,
        minHeight: 280,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 4px 10px rgba(100,139,107,0.25)",
        },
      }}
    >
      <CardContent
        sx={{
          p: 3,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#2B66C3",
              fontFamily: "var(--font-dm-sans)",
              mb: 0.5,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {post.title || "Post Title"}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              color: "#6B8BA4",
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 500,
              mb: 2,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {post.author || "Author"} — {formatDate(post.date)}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#1E1E1E",
              fontFamily: "var(--font-dm-sans)",
              mb: 2,
              lineHeight: 1.5,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {post.summary || "Blog Summary"}
          </Typography>
        </Box>

        <Box>
          <Chip
            label={post.category || "Category"}
            sx={{
              backgroundColor: categoryStyle.main,
              color: categoryStyle.contrastText,
              fontWeight: 700,
              fontFamily: "var(--font-dm-sans)",
              borderRadius: "20px",
              px: 1.5,
              py: 0.5,
              fontSize: "0.85rem",
              alignSelf: "flex-start",
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
