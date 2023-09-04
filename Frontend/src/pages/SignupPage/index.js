import * as React from "react";

import TextField from "@mui/material/TextField";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { Button, FormControl, InputLabel, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import css from "./style.module.css";
import { btnStyle } from "../../generic/CustomStyle";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#E0E3E7",
            "--TextField-brandBorderHoverColor": "#B2BAC2",
            "--TextField-brandBorderFocusedColor": "#6F7E8C",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderHoverColor)",
            },
            "& label": {
              color: "var(--TextField-brandBorderHoverColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
            color: "white", // Add this line to set text color to white,
            backgroundColor: "#222222",
          },
        },
      },
    },
  });

export default function CustomizedInputsStyleOverrides() {
  const outerTheme = useTheme();
  const [degree, setDegree] = React.useState("");
  const [schoolYear, setSchoolYear] = React.useState("");

  const labels = [
    { label: "ID", type: "TextField", showInput: "true" },
    { label: "Full Name", type: "TextField", showInput: "true" },
    { label: "Email", type: "TextField", showInput: "true" },
    { label: "Phone Number", type: "TextField", showInput: "true" },
    { label: "Password", type: "TextField", showInput: "false" },
    {
      label: "Degree",
      type: "Select",
      showInput: "true",
      options: [
        "Computer Science",
        // "Communications",
        // "Information System",
        // "Data Science",
        // "Economy",
        // "Laws",
        // "Design and Innovation",
        // "Business Administration",
      ],
      value: degree,
      setter: setDegree,
    },
    {
      label: "School Year",
      type: "Select",
      showInput: "true",
      options: ["א", "ב", "ג", "ד"],
      value: schoolYear,
      setter: setSchoolYear,
    },
  ];

  const handleChange = (event, setter) => {
    setter(event.target.value);
  };

  return (
    <div style={{ padding: "3rem 5rem" }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          marginBottom: "2rem",
          fontWeight: 700,
          letterSpacing: "4px",
        }}
      >
        <span className={css["text-yellow"]}>Sign</span>up
      </Typography>
      <div className={css["container"]}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { md: "1fr 1fr" },
            gap: 2,
            marginBottom: "2rem",
          }}
        >
          {labels.map((label) => {
            return (
              <ThemeProvider theme={customTheme(outerTheme)} key={label.label}>
                {label.type === "TextField" ? (
                  label.label === "Password" ? (
                    <TextField
                      sx={{ textAlign: "center" }}
                      label="Password"
                      type="password"
                    />
                  ) : (
                    <TextField
                      sx={{ textAlign: "center" }}
                      label={label.label}
                      type="text"
                    />
                  )
                ) : (
                  <FormControl fullWidth>
                    <InputLabel id={label.label} sx={{ color: "#B2BAC2" }}>
                      {label.label}
                    </InputLabel>
                    <Select
                      labelId={label.label}
                      onChange={(event) => handleChange(event, label.setter)}
                      value={label.value}
                      label={label.label}
                    >
                      {label.options.map((option) => (
                        <MenuItem value={option} key={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}
              </ThemeProvider>
            );
          })}
        </Box>
        <Button variant="contained" className={css["cta-btn"]} sx={btnStyle}>
          To Signup Press here
        </Button>
      </div>
    </div>
  );
}
