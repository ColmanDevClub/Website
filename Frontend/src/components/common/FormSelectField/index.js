import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const FormSelectField = ({ label, onChange, options }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={label} sx={{ color: "#B2BAC2 !important" }}>
        {label}
      </InputLabel>
      <Select
        labelId={label}
        onChange={onChange}
        sx={{ color: "white" }}
        label={label}
      >
        {options.map((option) => (
          <MenuItem value={option} key={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FormSelectField;
