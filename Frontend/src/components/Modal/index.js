import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
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
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {title}
            </Typography>
            {children}
            <Button variant="contained" onClick={btnOnClick}>
              {btnText}
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
