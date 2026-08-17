export const isRequired =
  (message = "This field is required") =>
  (value) => ({
    valid: value.trim() !== "",
    message,
  });

export const isEmail =
  (message = "Please enter a valid email") =>
  (value) => ({
    valid: value.includes("@") && value.includes("."),
    message,
  });

export const isMinLength =
  (minLength, message = null) =>
  (value) => {
    if (message === null) {
      message = `Must be at least ${minLength} characters`;
    }

    return {
      valid: value.trim().length >= minLength,
      message,
    };
  };

export const isMatch =
  (otherValue, message = "Value doesn't match") =>
  (value) => ({
    valid: value === otherValue,
    message,
  });

export const validate = (value, validators) => {
  for (const validator of validators) {
    const result = validator(value);

    if (!result.valid) {
      return result.message; // return the first error message
    }
  }

  return null; // null means no errors
};
