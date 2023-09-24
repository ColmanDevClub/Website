import * as React from "react";

import { useNavigate } from "react-router";

import { Container, Grid, Typography, Box, Checkbox } from "@mui/material";

import { ThemeProvider, useTheme } from "@mui/material/styles";

import { customTheme } from "../../constants/theme.constants";

import css from "./style.module.css";
import { addUser } from "../../firebase/firebase-utils";
import FormInputField from "../../components/common/FormInputField";
import FormSelectField from "../../components/common/FormSelectField";
import Button from "../../components/common/Button";
import { allRules, errorMessages, labels } from "../../data";
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
    const validationState = labels.reduce((obj, { key, validator }) => {
      obj[key] = !validator(formValues[key]);
      return obj;
    }, {});

    setValidationErrors(validationState);

    if (Object.keys(validationState).length === 0) return;
    for (const key in validationState) {
      if (key === "experienceDetails" && formValues["experience"] !== "כן") {
        validationState[key] = validationState["experience"];
      }

      if (validationState[key]) {
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
            {labels.map(({ type, label, key, options, validator }, index) => {
              const FieldComponent = FIELDS_MAP[type];
              return label === "Experience Details" &&
                formValues["experience"] !== "כן" ? null : (
                <EntranceAnimation
                  animationDelay={
                    label === "Experience Details" ? 0 : index * 0.2
                  }
                >
                  <ThemeProvider theme={customTheme(outerTheme)} key={label}>
                    <FieldComponent
                      sx={{ width: "100%" }}
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
                  <Typography
                    sx={{
                      textAlign: "start",
                      color: "#f44336",
                    }}
                  >
                    {validationErrors[key] ? errorMessages[key] : ""}
                  </Typography>
                </EntranceAnimation>
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
                btnText="סגור"
                btnOnClick={() => setOpenRulesModal(false)}
              >
                <ul>
                  {allRules.map((rule) => {
                    return <li>{rule}</li>;
                  })}
                </ul>
                <Container
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                ></Container>
              </TransitionsModal>
              <Container
                sx={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Checkbox
                  defaultChecked={rules ? true : false}
                  onClick={() => {
                    setRules((prev) => !prev);
                    setOpenRulesModal(false);
                  }}
                  sx={{ color: "white" }}
                />
                <Typography>
                  אני מאשר את תנאי{" "}
                  <span
                    className={css["terms"]}
                    onClick={() => setOpenRulesModal((prev) => !prev)}
                  >
                    התקנון
                  </span>
                </Typography>
              </Container>
              <Button disabled={!rules} onClick={onSignupHandler}>
                Signup
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </EntranceAnimation>
  );
}
