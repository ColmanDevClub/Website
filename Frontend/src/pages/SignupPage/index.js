import * as React from "react";

import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  Typography,
  MenuItem,
  Select,
  Box,
  TextField,
} from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

import { DARK_WHITE } from "../../constants/theme.constants";

import css from "./style.module.css";
import { btnStyle } from "../../generic/CustomStyle";
import { addUser } from "../../firebase/firebase-config";
import FormInputField from "../../components/common/FormInputField";
import FormSelectField from "../../components/common/FormSelectField";
import Button from "../../components/common/Button";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": DARK_WHITE,
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
            color: "white",
            backgroundColor: "#222222",
          },
        },
      },
    },
  });

const labels = [
  { label: "ID", type: "TextField", showInput: "true", key: "id" },
  {
    label: "Full Name",
    type: "TextField",
    showInput: "true",
    key: "fullName",
  },
  { label: "Email", type: "TextField", showInput: "true", key: "email" },
  {
    label: "Phone Number",
    type: "TextField",
    showInput: "true",
    key: "phoneNumber",
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
    key: "degree",
  },
  {
    label: "School Year",
    type: "Select",
    showInput: "true",
    options: ["א", "ב", "ג", "ד"],
    key: "schoolYear",
  },
];

const FIELDS_MAP = {
  TextField: FormInputField,
  Select: FormSelectField,
};

export default function CustomizedInputsStyleOverrides() {
  const outerTheme = useTheme();

  const [formValues, setFormValues] = React.useState({});

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
          {labels.map(({type, label, key, options}) => {
            const FieldComponent = FIELDS_MAP[type];
            return (
              <ThemeProvider theme={customTheme(outerTheme)} key={label}>
                (
                <FieldComponent
                  options={options}
                  label={label}
                  onChange={(event) =>
                    setFormValues((prev) => {
                      return { ...prev, [key]: event.target.value };
                    })
                  }
                />
                )
              </ThemeProvider>
            );
          })}
        </Box>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid xs={12} md={6}>
            <Button
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
