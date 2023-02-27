function isValid(s) {
  const stack = [];
  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (pairs[c]) {
      // If it is an opening parenthesis
      stack.push(c);
    } else {
      // If it is a closing parenthesis
      const top = stack.pop();
      if (!top || pairs[top] !== c) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isValid("[[]()"));
