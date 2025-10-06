"use client";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useBlog } from "../context/BlogContext";
import BlogCard from "../components/BlogCard";

export default function HomePage() {
  const { posts } = useBlog();
  const router = useRouter();

  return (
    <Container sx={{ py: 5 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
        <Typography variant="h4">All Blog Posts</Typography>
        <Button variant="contained" onClick={() => router.push("/create")}>
          Create New Post
        </Button>
      </Box>

      <Grid container spacing={3}>
        {posts.length === 0 ? (
          <Typography>No blog posts yet. Create one!</Typography>
        ) : (
          posts.map((post, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <BlogCard post={post} />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}
