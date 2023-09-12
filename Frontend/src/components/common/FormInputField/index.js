import { TextField } from "@mui/material";

const FormInputField = ({
  label,
  onChange,
  sx = { textAlign: "center" },
  error,
}) => {
  return (
    <TextField
      sx={sx}
      label={label}
      type="text"
      onChange={onChange}
      error={error}
    />
  );
};

export default FormInputField;
