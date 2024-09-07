import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { theme } from "../../theme";
import { auth } from "../../firebase/firebase-config";
import TransitionsModal from "../../components/Modal";
import FacebookLogin from 'react-facebook-login';
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router";
import css from "./style.module.css";

const clientIdGoogle = "724234007789-f0mijjj0vrj4rqllo62kg01oe78v5ve7.apps.googleusercontent.com"

const defaultTheme = createTheme();

const responseFacebook = (response) => {
  console.log("login result", response);
};
export default function SignIn() {
  const [formValues, setFormValues] = React.useState({});
  const [openModal, setOpenModal] = React.useState(false);
  const [emailSent, setEmailSent] = React.useState(false);
  const [resetEmailValue, setResetEmailValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, formValues.email, formValues.password)
      .then((userCredential) => {
        localStorage.setItem(
          "userToken",
          JSON.stringify(userCredential._tokenResponse.idToken)
        );
        navigate("/syllabus");
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh", 
            padding: "2rem",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              marginBottom: "2rem",
              fontWeight: 700,
              letterSpacing: "4px",
              fontSize: '48px',
              lineHeight: '41.04px',
            }}
          >
            <span className={css["text-yellow"]}>Login To Your</span> Account
            <br />
            <br />
            <div
              style={{
                fontSize: "24px",
                fontWeight: "300",
                lineHeight: "41.04px",
                textAlign: "center",
              }}
            >
              We have become specialists at turning new ideas into viable products for our client’s organizations.
              Some of the more rewarding projects we have had the honour to be involved.
              <br />
              <br />
            </div>
          </Typography>

          <Grid container spacing={2} sx={{ mb: 3, justifyContent: "center" }}>
            <Grid item xs={12} md={6}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "1px",
                  borderRadius: "10px",
                  padding: "2rem",
                  marginBottom: "2rem", 
               
       
                }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) =>
                    setFormValues((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) =>
                    setFormValues((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                />
                {error && (
                  <Typography
                    sx={{
                      textAlign: "start",
                      color: "#f44336",
                    }}
                  >
                    {"Email or password is incorrect"}
                  </Typography>
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Login To Your Account
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      <Typography onClick={() => setOpenModal(true)}>
                        Forgot password?
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
                <br />
                <br />
                <TransitionsModal
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                  closeOnOverlay={true}
                  btnText="Reset Password"
                  btnOnClick={async () => {
                    if (resetEmailValue !== "") {
                      setEmailSent(true);
                      await sendPasswordResetEmail(auth, resetEmailValue);
                      console.log("Password reset email sent");
                      setOpenModal(false);
                    }
                  }}
                >
                  {!emailSent ? (
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="email"
                      label="Email Address"
                      type="email"
                      id="emailReset"
                      onChange={(e) => setResetEmailValue(e.target.value)}
                    />
                  ) : (
                    <Typography>{"Password reset email sent"}</Typography>
                  )}
                </TransitionsModal>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px",
                  borderRadius: "10px",
                  padding: "2rem",
                  
                  
                }}
              >  
              <Typography variant="h6" gutterBottom>
                Or sign in with
              </Typography>
              <FacebookLogin
                appId="2150511385335801"
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook}
                render={renderProps => (
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mb: 2 }}
                    onClick={renderProps.onClick}
                  >
                    Facebook
                  </Button>
                )}
              />
             
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}