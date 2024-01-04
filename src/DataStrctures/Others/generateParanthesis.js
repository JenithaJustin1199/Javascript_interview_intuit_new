function generateParanthesis(n) {
  // Array to store the generated combinations
  let result = [];

  // Helper function to perform recursive iteration
  function loopIterator(str, open, close) {
    // Base cases to terminate recursion
    if (open > n || close > n || open > close) return;
    
    // Check if a valid combination is reached
    if (str.length === n * 2 && open === close) {
      result.push(str);
      return;
    }

    // Recursively generate combinations by adding "(" and ")"
    loopIterator(str + "(", open, close + 1);
    loopIterator(str + ")", open + 1, close);
  }

  // Start the recursive iteration with an empty string and counters set to 0
  loopIterator("", 0, 0);

  // Return the generated combinations
  return result;
}

// Example usage:
console.log(generateParanthesis(3));
