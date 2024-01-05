Approach:

The goal is to find a sorted subsequence of size 3 in linear time. We can achieve this by keeping track of two minimum values, min1 and min2, and updating them as we iterate through the array.

Initialize Variables:

Initialize min1 and min2 to positive infinity.
Iterate Through Array:

Iterate through the array.
If the current element is less than min1, update min1.
If the current element is greater than min1 but less than min2, update min2.
If the current element is greater than min2, a sorted subsequence of size 3 is found.
Result:

If a sorted subsequence of size 3 is found, return the elements.
Code with Comments:

javascript
Copy code
function findSortedSubsequence(arr) {
  let n = arr.length;

  // Initialize minimum values
  let min1 = Infinity;
  let min2 = Infinity;

  let result = [];

  // Iterate through the array
  for (let i = 0; i < n; i++) {
    // Update min1 if the current element is less than min1
    if (arr[i] < min1) {
      min1 = arr[i];
    }
    // Update min2 if the current element is greater than min1 but less than min2
    else if (arr[i] > min1 && arr[i] < min2) {
      min2 = arr[i];
    }
    // If the current element is greater than min2, a sorted subsequence of size 3 is found
    else if (arr[i] > min2) {
      result = [min1, min2, arr[i]];
      break;
    }
  }

  // Check if a sorted subsequence of size 3 is found
  if (result.length === 3) {
    return result;
  } else {
    return "No such subsequence exists.";
  }
}

// Example usage:
const arr = [12, 11, 10, 5, 2, 6, 30];
const result = findSortedSubsequence(arr);
console.log(result); // Output: [5, 6, 30] or [2, 6, 30]
Time Complexity:

The time complexity of this solution is O(n), where n is the length of the array. The algorithm iterates through the array once, and each iteration involves constant time operations. Therefore, the overall time complexity is linear in terms of the array length.
