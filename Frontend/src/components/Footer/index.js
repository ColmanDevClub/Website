import * as React from "react";

import { Container, AppBar, Box, Toolbar, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import css from "./style.module.css";

export default function DenseAppBar() {
  return (
    <Box display={'flex'} alignItems="center">
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
            <Box sx={{ display: "flex" }} gap="0.5rem">
              <GitHubIcon />
              <InstagramIcon />
              <LinkedInIcon />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
