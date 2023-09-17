import * as React from "react";

import { useNavigate } from "react-router";

import {
  Container,
  Grid,
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import { ThemeProvider, useTheme } from "@mui/material/styles";

import { customTheme } from "../../constants/theme.constants";

import css from "./style.module.css";
import { addUser } from "../../firebase/firebase-utils";
import FormInputField from "../../components/common/FormInputField";
import FormSelectField from "../../components/common/FormSelectField";
import Button from "../../components/common/Button";
import MuiButton from "@mui/material/Button";
import { allRules, labels } from "../../data";
import TransitionsModal from "../../components/Modal";
import EntranceAnimation from "../../components/EntranceAnimation";

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
  const [openRulesModal, setOpenRulesModal] = React.useState(false);
  const [rules, setRules] = React.useState(false);

  React.useEffect(() => {
    labels.forEach((label) =>
      setFormValues((prev) => {
        return { ...prev, [label.key]: "" };
      })
    );
  }, []);

  const onSignupHandler = () => {
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
    if (!rules) return;

    setOpenModal(true); //TODO --> If we want to test it again, move to line 151. after testing return to line 163.
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
    <EntranceAnimation>
      <Container
        maxWidth="lg"
        sx={{ paddingTop: "3rem", paddingBottom: "3rem" }}
      >
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
                closeOnOverlay={false}
                btnText="מעבר לדף הבית"
                btnOnClick={() => navigate("/")}
              ></TransitionsModal>
              <TransitionsModal
                openModal={openRulesModal}
                setOpenModal={setOpenRulesModal}
                title={"תקנון"}
                closeOnOverlay={true}
              >
                {allRules.map((rule) => {
                  return (
                    <Typography
                      sx={{
                        textAlign: "start",
                        marginBottom: "0.5rem",
                        fontWeight: 700,
                        letterSpacing: "4px",
                      }}
                    >
                      {" "}
                      * {rule}
                    </Typography>
                  );
                })}
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked={rules ? true : false}
                      onClick={() => {
                        setRules((prev) => !prev);
                        setOpenRulesModal(false);
                      }}
                      sx={{ color: "white" }}
                    />
                  }
                  label="מאשר"
                />
              </TransitionsModal>
              <MuiButton
                variant="outlined"
                color={rules ? "success" : "inherit"}
                onClick={() => setOpenRulesModal((prev) => !prev)}
                sx={{ fontWeight: 500 }}
              >
                תקנון
              </MuiButton>
              <Button disabled={!rules} onClick={onSignupHandler}>Signup</Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </EntranceAnimation>
  );
}
