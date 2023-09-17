import { Button } from "@mui/material";

import css from "./Button.module.css";

import { btnStyle } from "./Button.constants";

const ButtonWrapper = ({ children, onClick, ...rest }) => {
  return (
    <Button
      variant="contained"
      className={css["cta-btn"]}
      sx={{
        ...btnStyle,
        marginTop: "1rem",
      }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default ButtonWrapper;
