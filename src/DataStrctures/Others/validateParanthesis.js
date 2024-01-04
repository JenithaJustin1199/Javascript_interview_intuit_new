function isValid(s) {
  // Initialize an empty stack to keep track of opening parentheses
  const stack = [];
  
  // Define pairs of opening and closing parentheses
  const pairs = {
    "(": ")",
    "[": "]",
    "{": "}"
  };

  // Iterate through each character in the string
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);

    // Check if the character is an opening parenthesis
    if (pairs[c]) {
      // If it is an opening parenthesis, push it onto the stack
      stack.push(c);
    } else {
      // If it is a closing parenthesis
      // Pop the top element from the stack (the last opening parenthesis)
      const top = stack.pop();

      // Check if the popped opening parenthesis matches the current closing parenthesis
      if (!top || pairs[top] !== c) {
        // If not, the parentheses are not balanced
        return false;
      }
    }
  }

  // Check if there are any remaining opening parentheses in the stack
  // If the stack is empty, the parentheses are balanced
  return stack.length === 0;
}

// Example usage:
console.log(isValid("[[]()"));
