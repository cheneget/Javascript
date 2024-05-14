function validatePassword(password, commonWords = []) {
    if (!password) {
      return "Password cannot be blank.";
    }
  
    for (let i = 0; i < password.length - 1; i++) {
      if (password[i] === password[i + 1]) {
        return "Password cannot contain repeated characters.";
      }
    }
  
    if (commonWords.length > 0 && commonWords.includes(password.toLowerCase())) {
      return "Password cannot be a common word.";
    }
  
    return "Password is valid.";
  }
  const password1 = "Qwerty";
  const password2 = "hhhhhh666";
  const commonWords = ["password", "123456"];
  
  console.log(validatePassword(password1));
  console.log(validatePassword(password2));