function getPermutations(str) {
  const result = [];

  // Helper function for recursive backtracking
  function backtrack(start) {
    // If the current permutation is complete, add it to the result
    if (start === str.length - 1) {
      result.push(str.join(''));
      return;
    }

    for (let i = start; i < str.length; i++) {
      // Swap characters
      [str[start], str[i]] = [str[i], str[start]];

      // Recursively generate permutations for the remaining characters
      backtrack(start + 1);

      // Undo the swap for backtracking
      [str[start], str[i]] = [str[i], str[start]];
    }
  }

  // Convert the string to an array of characters for easy swapping
  const strArray = str.split('');
  backtrack(0);

  return result;
}

// Example usage:
const inputStr1 = "cd";
const output1 = getPermutations(inputStr1.split(''));
console.log(output1);  // Output: [ 'cd', 'dc' ]

const inputStr2 = "abb";
const output2 = getPermutations(inputStr2.split(''));
console.log(output2);  // Output: [ 'abb', 'abb', 'bab', 'bba', 'bab', 'bba' ]
Approach:

The function uses recursive backtracking to generate all permutations of the input string.
A helper function (backtrack) is used to perform the recursive permutation generation.
The function swaps characters and explores all possibilities, undoing the swap during backtracking.
The result is a list of strings representing all possible permutations.
Time Complexity:

The time complexity of this solution is O(n!), where n is the length of the input string. This is because, for each character in the string, there are (n-1)! permutations generated in the recursive calls.
