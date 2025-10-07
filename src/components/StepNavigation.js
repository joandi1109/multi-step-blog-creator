"use client";
import { Box, Button } from "@mui/material";

export default function StepNavigation({ step, next, back, handleSubmit }) {
  const isLastStep = step === 4;

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: { xs: "center", sm: "flex-end" },
        alignItems: "center",
        gap: 1.5,
        mt: 2,
        width: "100%",
      }}
    >
      {step > 1 && (
        <Button
          onClick={back}
          color="primary"
          variant="outlined"
          sx={{
            fontWeight: 600,
            textTransform: "none",
            width: { xs: "100%", sm: "auto" },
            minWidth: "90px",
            height: "38px",
          }}
        >
          Back
        </Button>
      )}

      <Button
        onClick={isLastStep ? handleSubmit : next}
        sx={{
          fontWeight: 600,
          textTransform: "none",
          width: { xs: "100%", sm: "auto" },
          minWidth: "90px",
          height: "38px",
          backgroundColor: isLastStep ? "#648B6B" : "#1976D2",
          color: "#fff",
          "&:hover": {
            backgroundColor: isLastStep ? "#557A5C" : "#1565C0",
          },
        }}
      >
        {isLastStep ? "Submit" : "Next"}
      </Button>
    </Box>
  );
}
