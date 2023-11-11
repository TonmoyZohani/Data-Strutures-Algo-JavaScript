function areParenthesesBalanced(str) {
  let stack = [];

  let parenthesesOrder = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (const char of str) {
    if (char === "(" || char === "{" || char == "[") {
      stack.push(char);
    } else {
      const lastOpenBracket = stack.pop();
      if (char !== parenthesesOrder[lastOpenBracket]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(areParenthesesBalanced("{[()]}"));
console.log(areParenthesesBalanced(")]}{[("));
