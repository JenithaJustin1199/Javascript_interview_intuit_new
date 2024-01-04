function minimumPalindromemoves(s) {
  // Initialize variables to keep track of moves and pointers
  let moves = 0;
  let left = 0;
  let right = s.length - 1;

  // Iterate until the pointers meet in the middle
  while (left < right) {
    // Check if characters at current positions are not equal
    if (s[left] !== s[right]) {
      // Calculate the absolute difference in ASCII values and add to moves
      moves += Math.abs(s.charCodeAt(left) - s.charCodeAt(right));
    }

    // Move the pointers towards the center
    left++;
    right--;
  }

  // Return the total moves required to make the string a palindrome
  return moves;
}

// Example usage:
console.log(minimumPalindromemoves("abaaccle")); O(N)
