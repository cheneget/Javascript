function generatePassword(firstName, lastName) {
    if (!firstName || !lastName) {
      return "Please provide both first and last names.";
    }
  
    const first3 = firstName.slice(0, 3);
    const last3 = lastName.slice(-3);
    return `${first3}${last3}@2050`;
  }

  const myName = { firstName: "Paul", lastName: "Ndege" };
  
  console.log(generatePassword(myName.firstName, myName.lastName));