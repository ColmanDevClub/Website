import validator from "validator";

const emailValidation = (email) => {
  const test = validator.trim(email);
  return validator.isEmail(test);
};

const stringValidation = (name) => {
  if (name.length < 3) return false;
  const newName = validator.trim(name);
  const nameValidation = /^[a-zA-Z\s]+$/;
  return nameValidation.test(newName);
};

const numberValidation = (number) => {
  const newNumber = validator.trim(number);
  if (!validator.isNumeric(newNumber)) return false;
  if (newNumber.length !== 10) return false;
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
