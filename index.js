const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  return tutorials.map((tutorial) => {
    return tutorial
      .split(" ")
      .map((word) => {
        // Preserve acronyms (fully uppercase or known keywords)
        const preserveWords = ["API", "NaN", "OO", "JSONP"];
        if (preserveWords.includes(word)) {
          return word;
        }

        // Capitalize first letter, keep rest as-is (to maintain camelCase words)
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  });
};
