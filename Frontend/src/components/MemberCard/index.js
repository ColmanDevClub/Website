import * as React from "react";

import { Link } from "react-router-dom";
import {LinkedIn} from '@mui/icons-material';

import {
  Button,
  Typography,
  Box,
} from "@mui/material";

export default function MemberCard({ profileImage, name, about, linkedin }) {
  return (
    <>
      <Box
        sx={{
          border: "1px solid #F6C927",
          borderRadius: "0.625rem",
          padding: "2rem",
          width: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={profileImage}
          alt={`${name} image`}
          style={{
            borderRadius: "50%",
            border: "0.75rem solid white",
            width: '100%',
            height: '100%',
            maxHeight: "12rem",
            maxWidth: "12rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <Typography
            component="h3"
            sx={{
              marginTop: "1.25rem",
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#F6C927",
            }}
          >
            {name}
          </Typography>
          <Typography
            component="p"
            sx={{
              marginTop: "0.25rem",
              fontSize: "1.1rem",
              flex: "1",
              color: "#999999",
            }}
          >
            {about}
          </Typography>
          <Link to={linkedin} target='_blank' style={{textDecoration: 'none'}}>
            <Button sx={{ color: "#F6C927", marginTop: "1rem" }}>
              <LinkedIn fontSize="large"/>
            </Button>
          </Link>
        </div>
      </Box>
    </>
  );
}
