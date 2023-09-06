import * as React from "react";

import { Container, AppBar, Box, Toolbar, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";

import css from "./style.module.css";

export default function DenseAppBar() {
  return (
    <>
      {/* <Box display={"flex"} alignItems="center" style={{ display: "none" }} sx={{ display: {xs: 'none', md: "none !important" } }}>
        <AppBar position="static" sx={{ backgroundColor: "#222222", padding: '0.5rem' }}>
          <Container maxWidth="xl">
            <Toolbar variant="dense" sx={{display: 'flex', justifyContent: 'space-between'}}>
              <Typography variant="h6" noWrap component="a" href="/" sx={{
                  mr: 2,
                  display: { xs: "flex", md: "flex" },
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Colman<span className={css["text-yellow"]}>Dev</span>Club
              </Typography>
              <Box sx={{ display: "flex" }} gap="1rem">
                <GitHubIcon />
                <InstagramIcon />
                <LinkedInIcon />
              </Box>
              <Typography variant="p" sx={{
                marginX: '0',
                marginY: '0',
                color: '#999999',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <CopyrightIcon />
                All Rights Reserved To ColmanDevClub
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </Box> */}

      <Box alignItems="center" sx={{ display: { xs: "block", md: "block" } }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "#222222", paddingY: "1rem" }}
        >
          <Container maxWidth="xl">
            <Toolbar
              variant="dense"
              sx={{
                display: { xs: "flex" },
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  display: { xs: "flex", md: "flex" },
                  fontSize: { xs: "1.25rem", md: "1.5rem", lg: "1.75rem" },
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Colman<span className={css["text-yellow"]}>Dev</span>Club
              </Typography>
              <Box sx={{ display: "flex" }} gap="0.75rem">
                <a
                  href="https://github.com/ColmanDevClub"
                  className={css["icon"]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon
                    sx={{ fontSize: { xs: "1.5rem", lg: "1.75rem" } }}
                  />
                </a>
                <a
                  href="/"
                  className={css["icon"]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon
                    sx={{ fontSize: { xs: "1.5rem", lg: "1.75rem" } }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/colman-devclub/"
                  className={css["icon"]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon
                    sx={{ fontSize: { xs: "1.5rem", lg: "1.75rem" } }}
                  />
                </a>
              </Box>
              <Typography
                component="p"
                sx={{
                  marginX: "0",
                  marginY: "0",
                  color: "#999999",
                  fontSize: { xs: "0.85rem", md: "1rem" },
                  display: "flex",
                  gap: "0.5rem",
                  textAlign: "center",
                  width: "fit-content",
                }}
              >
                <Typography component="span" sx={{ width: "fit-content" }}>
                  © All Rights Reserved To Colman
                  <Typography
                    component="span"
                    className={css["text-yellow"]}
                    style={{ filter: "brightness(0.75)" }}
                  >
                    Dev
                  </Typography>
                  Club
                </Typography>
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
}
