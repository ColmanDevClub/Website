import { TextField } from "@mui/material";

const FormInputField = ({ label, onChange, sx = { textAlign: "center" } }) => {
  return <TextField sx={sx} label={label} type="text" onChange={onChange} />;
};

export default FormInputField;
