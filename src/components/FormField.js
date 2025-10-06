"use client";
import { TextField, MenuItem } from "@mui/material";

export default function FormField({
  label,
  name,
  value,
  onChange,
  required = false,
  multiline = false,
  rows = 1,
  select = false,
  options = [],
}) {
  return (
    <TextField
      fullWidth
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      multiline={multiline}
      rows={rows}
      select={select}
      margin="normal"
    >
      {select &&
        options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
    </TextField>
  );
}
