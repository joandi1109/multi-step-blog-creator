"use client";
import { Box, Typography, Chip } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function StepReview({ data = {} }) {
  const theme = useTheme();

  const fields = [
    { label: "Title", value: data.title },
    { label: "Author", value: data.author },
    { label: "Category", value: data.category },
    { label: "Summary", value: data.summary },
    { label: "Content", value: data.content },
  ];

  const getCategoryColor = (category) => {
    if (!category) return theme.palette.category.default;
    const key = category.toLowerCase();
    return theme.palette.category[key] || theme.palette.category.default;
  };

  return (
    <Box sx={{ maxWidth: 600 }}>
      <Typography
        variant="h6"
        sx={{ fontWeight: 600, mb: 2, color: "#000" }}
      >
        Review Your Blog Post
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {fields.map((field, index) => (
          <Box
            key={index}
            sx={{
              display: "grid",
              gridTemplateColumns: "90px 10px auto",
              alignItems: "start",
              columnGap: 1,
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 600, color: "#000" }}>
              {field.label}
            </Typography>

            <Typography variant="body1" sx={{ fontWeight: 600, color: "#000" }}>
              :
            </Typography>

            {field.label === "Category" ? (
              <Chip
                label={field.value || "Uncategorized"}
                sx={{
                  backgroundColor: getCategoryColor(field.value).main,
                  color: getCategoryColor(field.value).contrastText,
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  borderRadius: "16px",
                  px: 1.5,
                  height: "26px",
                  textTransform: "capitalize",
                  width: "20%",
                  minWidth: "80px",
                  maxWidth: "120px",
                }}
              />
            ) : (
              <Typography
                variant="body1"
                sx={{ color: "#333", wordBreak: "break-word" }}
              >
                {field.value || "-"}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
