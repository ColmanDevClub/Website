import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import css from "./style.module.css";

export default function DenseAppBar() {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "#222222" }}>
        <Container maxWidth="xl">
          <Toolbar variant="dense">
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "flex" },
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Colman<span className={css["text-yellow"]}>Dev</span>Club
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
