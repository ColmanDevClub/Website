import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function DenseAppBar() {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "#222222" }}>
        <Toolbar variant="dense">
          <Typography variant="p" color="inherit" component="div">
            ColmanDevClub
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
