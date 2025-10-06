"use client";
import { Box, Button } from "@mui/material";
import { useBlog } from "../context/BlogContext";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function StepNavigation({ step, next, back, data }) {
  const { addPost } = useBlog();
  const router = useRouter();

  const handleSubmit = () => {
    if (!data || !data.title || !data.author) {
      Swal.fire({
        title: "Missing Data",
        text: "Please complete all fields before submitting.",
        icon: "warning",
        confirmButtonColor: "#1976d2",
      });
      return;
    }

    addPost({
      ...data,
      id: Date.now(),
      date: new Date().toISOString(),
    });

    Swal.fire({
      title: "Success!",
      text: "Your blog post has been created successfully",
      icon: "success",
      confirmButtonColor: "#1976d2",
      confirmButtonText: "Go to Blog List",
    }).then(() => router.push("/"));
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 3 }}>
      {step > 1 && (
        <Button variant="outlined" onClick={back}>
          Back
        </Button>
      )}

      {step < 4 ? (
        <Button variant="contained" onClick={next}>
          Next
        </Button>
      ) : (
        <Button variant="contained" color="success" onClick={handleSubmit}>
          Submit
        </Button>
      )}
    </Box>
  );
}
