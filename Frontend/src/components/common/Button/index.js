import css from "./Button.module.css";

import { btnStyle } from "./Button.constants";
import { Button } from "@mui/material";

const ButtonWrapper = ({ children, onClick }) => {
  return (
    <Button
      variant="contained"
      className={css["cta-btn"]}
      sx={{
        ...btnStyle,
        marginTop: "1rem",
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ButtonWrapper;
