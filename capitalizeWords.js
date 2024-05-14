function capitalizeWords(str) {
    if (typeof str !== "string") {
      return "Invalid input. Please provide a string.";
    }
  
    const words = str.split(" ");
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  const thisSentence = "please run this code";
  
  console.log(capitalizeWords(thisSentence));