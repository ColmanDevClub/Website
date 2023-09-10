import * as React from "react";
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  Typography,
  Select,
  Box,
  TextField,
} from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

import css from "./style.module.css";
import { btnStyle } from "../../generic/CustomStyle";
import { addUser } from "../../firebase/firebase-config";
import {
  emailValidation,
  idValidation,
  numberValidation,
  selectionValidation,
  stringValidation,
} from "../../utils";

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
            [`&:hover .MuiOutlinedInput-notchedOutline`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .MuiOutlinedInput-notchedOutline`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
            color: "white",
            backgroundColor: "#222222",
          },
        },
      },
    },
  });

export default function CustomizedInputsStyleOverrides() {
  const outerTheme = useTheme();
  const [formValues, setFormValues] = React.useState({});
  const [validationErrors, setValidationErrors] = React.useState({});

  const labels = [
    {
      label: "ID",
      type: "TextField",
      showInput: "true",
      key: "id",
      validator: idValidation,
    },
    {
      label: "Full Name",
      type: "TextField",
      showInput: "true",
      key: "fullName",
      validator: stringValidation,
    },
    {
      label: "Email",
      type: "TextField",
      showInput: "true",
      key: "email",
      validator: emailValidation,
    },
    {
      label: "Phone Number",
      type: "TextField",
      showInput: "true",
      key: "phoneNumber",
      validator: numberValidation,
    },
    {
      label: "Password",
      type: "TextField",
      showInput: "false",
      key: "password",
    },
    {
      label: "Degree",
      type: "Select",
      showInput: "true",
      options: ["Computer Science"],
      key: "degree",
      validator: selectionValidation,
    },
    {
      label: "School Year",
      type: "Select",
      showInput: "true",
      options: ["א", "ב", "ג", "ד"],
      key: "schoolYear",
      validator: selectionValidation,
    },
  ];

  const inputHandler = (label, value) => {
    const isValid = label.validator(value);
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [label.key]: !isValid,
    }));
  };

  return (
    <Container maxWidth="lg" sx={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
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
            gridTemplateColumns: { sm: "1fr", md: "1fr 1fr" },
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
                      onChange={(event) => {
                        setFormValues((prev) => ({
                          ...prev,
                          password: event.target.value,
                        }));
                      }}
                      error={validationErrors[label.key]} // Set error prop
                    />
                  ) : (
                    <TextField
                      sx={{
                        textAlign: "center",
                      }}
                      label={label.label}
                      type="text"
                      onChange={(event) => {
                        setFormValues((prev) => ({
                          ...prev,
                          [label.key]: event.target.value,
                        }));
                        inputHandler(label, event.target.value);
                      }}
                      error={validationErrors[label.key]} // Set error prop
                    />
                  )
                ) : (
                  <FormControl fullWidth>
                    <InputLabel
                      id={label.label}
                      sx={{ color: "#B2BAC2 !important" }}
                    >
                      {label.label}
                    </InputLabel>
                    <Select
                      labelId={label.label}
                      onChange={(event) =>
                        setFormValues((prev) => ({
                          ...prev,
                          [label.key]: event.target.value,
                        }))
                      }
                      sx={{ color: "white" }}
                      value={formValues[label.key] || ""}
                      label={label.label}
                    />
                  </FormControl>
                )}
              </ThemeProvider>
            );
          })}
        </Box>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid xs={12} md={6}>
            <Button
              variant="contained"
              className={css["cta-btn"]}
              sx={{
                ...btnStyle,
                marginTop: "1rem",
              }}
              onClick={() =>
                addUser({
                  formValues,
                })
              }
            >
              Signup
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
