export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validatePassword(password) {
  return password.trim().length >= 8;
}

export function validateLogin(values) {
  const errors = {};

  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!validateEmail(values.email)) {
    errors.email = 'Enter a valid email address.';
  }

  if (!values.password.trim()) {
    errors.password = 'Password is required.';
  } else if (!validatePassword(values.password)) {
    errors.password = 'Password must be at least 8 characters.';
  }

  return errors;
}

export function validateSignup(values) {
  const errors = validateLogin(values);

  if (!values.fullName.trim()) {
    errors.fullName = 'Full name is required.';
  } else if (values.fullName.trim().length < 3) {
    errors.fullName = 'Full name must be at least 3 characters.';
  }

  if (!values.confirmPassword.trim()) {
    errors.confirmPassword = 'Please confirm your password.';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords must match.';
  }

  return errors;
}
