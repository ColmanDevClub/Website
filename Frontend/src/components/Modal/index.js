import * as React from "react";

import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Typography,
  Button,
  Container,
} from "@mui/material";

import { modalStyle } from "../../generic/CustomStyle";

import css from "./style.module.css";
export default function TransitionsModal({
  children,
  openModal,
  setOpenModal,
  title,
  closeOnOverlay,
  btnText,
  btnOnClick,
}) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={closeOnOverlay ? () => setOpenModal(false) : undefined}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal}>
          <Box sx={modalStyle}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              sx={{ fontWeight: "bold", textDecoration: "underline" }}
            >
              {title}
            </Typography>
            {children}
            {btnText && (
              <Container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  onClick={btnOnClick}
                  className={css["button"]}
                >
                  {btnText}
                </Button>
              </Container>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

/*

.closeModalButton {
  background-color: #f6c927;
  color: #222222;
  font-weight: 900;
  transition: 200ms ease-in-out;
}

.closeModalButton:hover {
  background-color: #f6c927;
  filter: brightness(0.85);
}

*/
