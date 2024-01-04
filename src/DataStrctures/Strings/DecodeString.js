function decodeString(str) {
  // Initialize an empty stack to keep track of intermediate results
  let stack = [];

  // Variables to track the current number and current string being decoded
  let currNumber = 0;
  let currString = "";

  // Iterate through each character in the input string
  for (let i = 0; i < str.length; i++) {
    // Check if the character is a digit (0-9)
    if (/\d/.test(str[i])) {
      // If a digit is found, update the current number
      currNumber = parseInt(str[i]);
    }
    // Check if the character is an opening bracket "["
    else if (str[i] == "[") {
      // Push the current string and current number onto the stack
      stack.push(currString);
      stack.push(currNumber);

      // Reset current string and current number for the nested decoding
      currString = "";
      currNumber = 0;
    }
    // Check if the character is a closing bracket "]"
    else if (str[i] == "]") {
      // Pop the previous number and previous string from the stack
      let num = stack.pop();
      let prevString = stack.pop();

      // Update the current string by repeating the previous string "num" times
      currString = prevString + currString.repeat(num);
    }
    // If the character is neither a digit nor a bracket, it is a normal character
    else {
      // Append the character to the current string
      currString += str[i];
    }
  }

  // The final result is the fully decoded string
  return currString;
}

// Example usage:
console.log(decodeString("3[a2[b]c]"));
