import { TextField } from "@mui/material";

const FormInputField = ({ label, onChange, sx = { textAlign: "center" }, error, type = "text", email, name
}) => {

  const checkEnglishName = () => {
    if (name.match(/^[a-zA-Z ]+$/)) {
      return name;
    }
    return "";
  };

  return (

    <TextField
      sx={sx}
      label={label}
      type={type}
      defaultValue={label === "Full Name (English)" ? checkEnglishName() : label === "Email" ? email : ""}
      onChange={onChange}
      error={error}
    />
  );
};

export default FormInputField;
