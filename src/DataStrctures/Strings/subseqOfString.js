function getAllSubsequences(str, index, currentSubsequence) {
  // Base case: If we reach the end of the string, print the current subsequence
  if (index === str.length) {
    console.log(currentSubsequence);
    return;
  }

  // Choice 1: Include the current character in the subsequence
  getAllSubsequences(str, index + 1, currentSubsequence + str[index]);

  // Choice 2: Exclude the current character from the subsequence
  getAllSubsequences(str, index + 1, currentSubsequence);
}

// Example usage:
const inputString = "abc";
getAllSubsequences(inputString, 0, "");

Time Complexity:

Let's denote the length of the input string as n.

The time complexity of this recursive solution is O(2^n), where n is the length of the string. This is because, at each position, we make two recursive calls (include or exclude the current character), and the recursion tree has a height of n. The total number of nodes in the recursion tree is 2^n.
