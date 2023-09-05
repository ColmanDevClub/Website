import css from "./Button.module.css";

import { btnStyle } from "./Button.constants";

const Button = ({ children, onClick }) => {
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

export default Button;
