The given function, lengthofLongestSubString, aims to find the length of the longest substring without repeating characters and returns both the length and the actual substring.

Sliding Window Technique:

The function uses the sliding window technique with two pointers (left and right) to represent the current substring.
Map to Track Positions:

A Map (mapper) is used to keep track of the last position where each character occurred.
Updating Left Pointer:

If the current character is already in the substring, and its last occurrence is after or at the current left pointer, update the left pointer to the next position after the last occurrence.
Updating Max Length and Indices:

Update the maximum length of the substring (maxLen) whenever a longer substring is found.
Keep track of the start and end indices of the maximum substring (maxStart and maxEnd).
Result:

Return an array containing the length of the longest substring (maxLen) and the substring itself.
Code with Comments:

javascript
Copy code
function lengthofLongestSubString(str) {
  // Initialize variables to keep track of the maximum substring length and indices
  let maxLen = 0;
  let left = 0;
  let maxStart = 0;
  let maxEnd = 0;

  // Use a Map to track the last position of each character in the substring
  let mapper = new Map();

  // Iterate through the string using the sliding window technique
  for (let right = 0; right < str.length; right++) {
    // If the current character is already in the substring
    // and its last occurrence is after or at the current left pointer
    if (mapper.has(str[right]) && mapper.get(str[right]) >= left) {
      // Update the left pointer to the next position after the last occurrence
      left = mapper.get(str[right]) + 1;
    }

    // Update the position of the current character in the map
    mapper.set(str[right], right);

    // Update the maximum length of the substring
    maxLen = Math.max(maxLen, right - left + 1);

    // Update the indices of the maximum substring
    if (right - left > maxEnd - maxStart) {
      maxStart = left;
      maxEnd = right;
    }
  }

  // Return the length of the longest substring and the substring itself
  return [maxLen, str.substring(maxStart, maxEnd + 1)];
}

// Example usage
console.log(lengthofLongestSubString("abcabcdefghistuefhjjjk"));
Time Complexity:

The time complexity of this algorithm is O(n), where n is the length of the input string. The algorithm iterates through the string once, and each operation inside the loop takes constant time. The use of a Map ensures efficient lookups and updates.
