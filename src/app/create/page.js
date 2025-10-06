"use client";

import { useState } from "react";
import { Box, Paper, Typography, Container } from "@mui/material";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { useBlog } from "../../context/BlogContext";
import StepMetadata from "../../components/steps/StepMetadata";
import StepSummary from "../../components/steps/StepSummary";
import StepContent from "../../components/steps/StepContent";
import StepReview from "../../components/steps/StepReview";
import StepNavigation from "../../components/StepNavigation";

export default function CreatePage() {
  const router = useRouter();
  const { addPost } = useBlog();

  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    title: "",
    author: "",
    summary: "",
    category: "",
    content: "",
  });

  const update = (newData) => setData((prev) => ({ ...prev, ...newData }));

  const next = () => setStep((prev) => prev + 1);
  const back = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    if (!data.title || !data.author || !data.summary || !data.category || !data.content) {
      Swal.fire({
        title: "Incomplete Data",
        text: "Please fill in all fields before submitting.",
        icon: "warning",
        confirmButtonColor: "#1976d2",
      });
      return;
    }

    const newPost = {
      ...data,
      id: Date.now(),
      date: new Date().toISOString(),
    };

    addPost(newPost);

    Swal.fire({
      title: "Success!",
      text: "Your blog post has been created successfully 🎉",
      icon: "success",
      confirmButtonColor: "#1976d2",
      confirmButtonText: "Go to Blog List",
    }).then(() => router.push("/"));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepMetadata data={data} update={update} />;
      case 2:
        return <StepSummary data={data} update={update} />;
      case 3:
        return <StepContent data={data} update={update} />;
      case 4:
        return <StepReview data={data} />;
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Paper sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom fontWeight={600}>
          Create Blog Post — Step {step}/4
        </Typography>

        <Box sx={{ mt: 2 }}>{renderStep()}</Box>

        <StepNavigation
          step={step}
          next={next}
          back={back}
          handleSubmit={handleSubmit}
          data={data}
        />
      </Paper>
    </Container>
  );
}
