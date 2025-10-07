"use client";

import Image from "next/image";
import { Box, Stepper, Step, StepLabel, Button } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { useBlog } from "../../context/BlogContext";
import { Close as CloseIcon, Check as CheckIcon, ArrowBack } from "@mui/icons-material";

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
  const [errors, setErrors] = useState({});
  const [stepErrors, setStepErrors] = useState({});

  const steps = [
    "Blogs Metadata",
    "Summary & Category",
    "Blog Content",
    "Review & Submit",
  ];

  const update = (newData) => setData((prev) => ({ ...prev, ...newData }));

  const validateStep = () => {
    const newErrors = {};
    if (step === 1) {
      if (!data.title.trim()) newErrors.title = "Field harus diisi";
      if (!data.author.trim()) newErrors.author = "Field harus diisi";
    } else if (step === 2) {
      if (!data.summary.trim()) newErrors.summary = "Field harus diisi";
      if (!data.category.trim()) newErrors.category = "Field harus diisi";
    } else if (step === 3) {
      if (!data.content.trim()) newErrors.content = "Field harus diisi";
    }

    setErrors(newErrors);
    const isValid = Object.keys(newErrors).length === 0;
    setStepErrors((prev) => ({ ...prev, [step]: !isValid }));
    return isValid;
  };

  const next = () => {
    if (validateStep()) setStep((prev) => prev + 1);
  };

  const back = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    const isValid = validateStep();
    if (!isValid) return;

    const result = await Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Pastikan semua data sudah benar sebelum disimpan.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya, Simpan",
      cancelButtonText: "Batal",
      confirmButtonColor: "#1976d2",
      cancelButtonColor: "#9e9e9e",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      const newPost = {
        ...data,
        id: Date.now(),
        date: new Date().toISOString(),
      };
      addPost(newPost);

      await Swal.fire({
        title: "Berhasil!",
        text: "Blog berhasil disimpan.",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#1976d2",
      });

      router.push("/");
    }
  };

  const renderStep = () => {
    const stepProps = { data, update, errors };
    switch (step) {
      case 1:
        return <StepMetadata {...stepProps} />;
      case 2:
        return <StepSummary {...stepProps} />;
      case 3:
        return <StepContent {...stepProps} />;
      case 4:
        return <StepReview data={data} />;
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        bgcolor: "#f9fafb",
      }}
    >
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#dce9f9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/images/CreatePost.png"
          alt="Create Post Illustration"
          width={700}
          height={700}
          priority
        />
      </Box>

      <Box
        sx={{
          flex: 1,
          px: 6,
          py: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          overflowY: "auto",
        }}
      >
        <Box sx={{ minHeight: "40px", mb: step === 1 ? 1 : 3 }}>
          {step === 1 && (
            <Button
              startIcon={<ArrowBack />}
              onClick={() => router.push("/")}
              sx={{
                backgroundColor: "#648B6B",
                color: "#fff",
                borderRadius: 6,
                textTransform: "none",
                px: 2,
                py: 0.5,
                width: "20%",
                alignSelf: "flex-start",
                "&:hover": { backgroundColor: "#55775c" },
              }}
            >
              Back
            </Button>
          )}
        </Box>

        <Stepper
          activeStep={step - 1}
          alternativeLabel
          sx={{
            flexWrap: "wrap",
            rowGap: 1,
            mb: 4,
            "& .MuiStepLabel-label": {
              fontWeight: 500,
              fontSize: "0.9rem",
              color: "#555",
              "@media (max-width: 1000px)": { fontSize: "0.8rem" },
              "@media (max-width: 800px)": { fontSize: "0.75rem" },
            },
            "& .MuiStepLabel-label.Mui-active": {
              color: "#000",
              fontWeight: 600,
            },
            "& .MuiStepLabel-label.Mui-completed": {
              color: "#648B6B",
            },
          }}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel
                StepIconComponent={(props) =>
                  stepErrors[index + 1] ? (
                    <CloseIcon color="error" />
                  ) : props.completed ? (
                    <CheckIcon color="success" />
                  ) : (
                    props.icon
                  )
                }
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box sx={{ flex: 1 }}>{renderStep()}</Box>

        <StepNavigation
          step={step}
          next={next}
          back={back}
          handleSubmit={handleSubmit}
        />
      </Box>
    </Box>
  );
}
