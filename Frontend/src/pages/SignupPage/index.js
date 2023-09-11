import * as React from "react";

import { useNavigate } from "react-router";

import { Container, Grid, Typography, Box } from "@mui/material";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

import { DARK_WHITE } from "../../constants/theme.constants";

import css from "./style.module.css";
import { addUser } from "../../firebase/firebase-config";
import FormInputField from "../../components/common/FormInputField";
import FormSelectField from "../../components/common/FormSelectField";
import Button from "../../components/common/Button";

import {
  emailValidation,
  idValidation,
  numberValidation,
  selectionValidation,
  stringValidation,
} from "../../utils";
import TransitionsModal from "../../components/Modal";

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
  // {
  //   label: "Password",
  //   type: "TextField",
  //   showInput: "false",
  //   key: "password",
  // },
  {
    label: "Degree",
    type: "Select",
    showInput: "true",
    options: [
      "Computer Science",
      // "Communications",
      "Information System",
      "Data Science",
      // "Economy",
      // "Laws",
      // "Design and Innovation",
      // "Business Administration",
    ],
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

const FIELDS_MAP = {
  TextField: FormInputField,
  Select: FormSelectField,
};

export default function CustomizedInputsStyleOverrides() {
  const outerTheme = useTheme();
  const navigate = useNavigate();

  const [openModal, setOpenModal] = React.useState(false);
  const [formValues, setFormValues] = React.useState({});
  const [validationErrors, setValidationErrors] = React.useState({});

  React.useEffect(() => {
    labels.forEach((label) =>
      setFormValues((prev) => {
        return { ...prev, [label.key]: "" };
      })
    );
  }, []);

  const onSignupHandler = () => {
    setOpenModal(true);
    for (const key in formValues) {
      const label = labels.filter((label) => label.key === key);
      inputHandler(label[0].validator, key, formValues[key]);
    }

    if (Object.keys(validationErrors).length === 0) return;
    for (const key in validationErrors) {
      if (validationErrors[key]) {
        return;
      }
    }

    addUser({ formValues });
  };

  const inputHandler = (validator, key, value) => {
    const isValid = validator(value);
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [key]: !isValid,
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
          {labels.map(({ type, label, key, options, validator }) => {
            const FieldComponent = FIELDS_MAP[type];
            return (
              <ThemeProvider theme={customTheme(outerTheme)} key={label}>
                <FieldComponent
                  options={options}
                  label={label}
                  onChange={(event) => {
                    setFormValues((prev) => {
                      return { ...prev, [key]: event.target.value };
                    });
                    inputHandler(validator, key, event.target.value);
                  }}
                  error={validationErrors[key]}
                />
              </ThemeProvider>
            );
          })}
        </Box>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid xs={12} md={6}>
            <TransitionsModal
              openModal={openModal}
              setOpenModal={setOpenModal}
              title={"נרשמת בהצלחה"}
              closeOnOverlay={true}
              btnText="מעבר לדף הבית"
              btnOnClick={() => navigate("/")}
            >
              <Typography sx={{ mt: 2 }}>הינך מועבר לדף הבית</Typography>
            </TransitionsModal>
            <Button onClick={onSignupHandler}>Signup</Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
