import * as React from "react";

import { Backdrop, Box, Modal, Fade, Typography, Button } from "@mui/material";

import { modalStyle } from "../../generic/CustomStyle";

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
              sx={{ fontWeight: "bold" }}
            >
              {title}
            </Typography>
            {children}
            {btnText && (
              <Button
                variant="contained"
                onClick={btnOnClick}
                sx={{ marginTop: "1rem" }}
              >
                {btnText}
              </Button>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
