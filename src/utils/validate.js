const checkValidate = (email, password, fullName, isSignInForm) => {
  // Email validation
  const isEmailValid =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  if (!isEmailValid) return "Email is not valid!";

  // Password validation
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      .test(password);

  if (!isPasswordValid) return "Password is not valid!";

  if (!isSignInForm) {
    if (!fullName || !/^[A-Za-z]{2,}(?:\s[A-Za-z]{2,})*$/.test(fullName)) {
      return "Name is not valid!";
    }
  }

  return null;
};

export default checkValidate;
