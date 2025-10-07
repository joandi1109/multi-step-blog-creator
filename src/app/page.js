"use client";

import Image from "next/image";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useBlog } from "../context/BlogContext";
import BlogCard from "../components/BlogCard";

export default function HomePage() {
  const router = useRouter();
  const { posts } = useBlog();

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <Box sx={{ bgcolor: "#f9fafb", minHeight: "100vh" }}>
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Image
          src="/images/Banner.png"
          alt="Blog Banner"
          width={1920}
          height={450}
          priority
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>

      <Box
        sx={{
          px: { xs: 2, sm: 4, md: 8 },
          py: 6,
          maxWidth: "1600px",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: "#166534",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            All Blog Posts
          </Typography>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#1d4ed8",
              borderRadius: "10px",
              px: 3,
              py: 1,
              textTransform: "none",
              fontWeight: 600,
              fontFamily: "var(--font-dm-sans)",
              "&:hover": { bgcolor: "#2563eb" },
            }}
            onClick={() => router.push("/create")}
          >
            Add Post
          </Button>
        </Box>

        <Grid container spacing={3}>
          {sortedPosts.length === 0 ? (
            <Typography>No blog posts yet. Create one!</Typography>
          ) : (
            sortedPosts.map((post, index) => (
              <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
                <BlogCard post={post} />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Box>
  );
}
