import validator from "validator";

const emailValidation = (email) => {
  return validator.isEmail(email);
};

const stringValidation = (name) => {
  const nameValidation = /^[a-zA-Z\s]+$/;
  return nameValidation.test(name);
};

const numberValidation = (number) => {
  if (!validator.isNumeric(number)) return false;
  if (number.length !== 10) return false;
  return true;
};

const idValidation = (idNumber) => {
  if (typeof idNumber !== "string") {
    return false;
  }

  idNumber = idNumber.replace(/\D/g, "");

  if (idNumber.length !== 9) {
    return false;
  }

  const idDigits = idNumber.split("").map(Number);
  const controlDigit = idDigits.pop();
  const sum = idDigits.reduce(function (acc, digit, index) {
    const weight = index % 2 === 0 ? 1 : 2;
    const value = digit * weight;
    return acc + (value > 9 ? value - 9 : value);
  }, 0);

  const calculatedControlDigit = (10 - (sum % 10)) % 10;

  return controlDigit === calculatedControlDigit;
};

const selectionValidation = (selectValue) => {
  return !validator.isEmpty(selectValue);
};

export {
  emailValidation,
  stringValidation,
  numberValidation,
  selectionValidation,
  idValidation,
};
