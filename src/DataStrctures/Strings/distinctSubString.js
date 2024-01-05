
Approach:

The function distinctSubString aims to find all distinct substrings of a given string and returns both the count of distinct substrings and a set containing those substrings. The approach is based on generating all possible substrings using nested loops and utilizing a set to ensure uniqueness.

Nested Loop:

Two nested loops iterate through the string to generate all possible substrings.
The outer loop (i) represents the starting index of the substring.
The inner loop (j) represents the ending index of the substring.
Substring Extraction:

Extract substrings using the slice method from index i to j (inclusive).
Set for Uniqueness:

Use a Set (subStringSet) to automatically eliminate duplicates.
Result:

Return an array containing the count of distinct substrings (subStringSet.size) and the set itself.
Code with Comments:

javascript
Copy code
function distinctSubString(str) {
  // Get the length of the input string
  let n = str.length;

  // Initialize a Set to store distinct substrings
  let subStringSet = new Set();

  // Nested loops to generate all possible substrings
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      // Extract substring using slice and add to the set
      subStringSet.add(str.slice(i, j));
    }
  }

  // Return the count of distinct substrings and the set itself
  return [subStringSet.size, subStringSet];
}

// Example usage
console.log(distinctSubString("abc"));
Time Complexity:

The time complexity of this algorithm is O(n^3), where n is the length of the input string. This is because there are two nested loops, and within the innermost loop, the slice operation takes O(n) time. As a result, the overall time complexity is cubic in terms of the length of the input string. The space complexity is also O(n^3) due to the set storing all possible substrings.
