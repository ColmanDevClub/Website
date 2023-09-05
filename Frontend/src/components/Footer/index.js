import * as React from "react";

import { Container, AppBar, Box, Toolbar, Typography } from "@mui/material";

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
