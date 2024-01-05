// Function to find the length of the longest common subarray between two arrays
function maxLengthOfRepeatedSubarray(arr1, arr2) {
  // Get the lengths of the two arrays
  let m = arr1.length;
  let n = arr2.length;

  // Create a 2D array dp to store the lengths of common subarrays
  let dp = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  // Initialize a variable to track the maximum length of the common subarray
  let maxlength = 0;

  // Iterate over each element of arr1
  for (let i = 1; i <= m; i++) {
    // Iterate over each element of arr2
    for (let j = 1; j <= n; j++) {
      // Check if the elements at the current positions are equal
      if (arr1[i - 1] === arr2[j - 1]) {
        // If equal, update the length of the common subarray
        dp[i][j] = dp[i - 1][j - 1] + 1;

        // Update the maximum length if the current length is greater
        maxlength = Math.max(maxlength, dp[i][j]);
      }
    }
  }

  // Return the maximum length of the common subarray
  return maxlength;
}

// Example usage:
const arr1 = [1, 2, 3, 2, 1];
const arr2 = [3, 2, 1, 4, 7];
const result = maxLengthOfRepeatedSubarray(arr1, arr2);
console.log(result); // Output: 3
Explanation:

The function takes two arrays (arr1 and arr2) as input and finds the length of the longest common subarray between them.

It uses a dynamic programming approach with a 2D array dp to store the lengths of common subarrays.

The nested loops iterate through each element of arr1 and arr2 to compare elements.

If the elements at the current positions are equal, it updates the length of the common subarray (dp[i][j]), and also updates the maximum length (maxlength).

Finally, the function returns the maximum length of the common subarray.

Time Complexity:

The time complexity of this solution is O(n * m), where n and m are the lengths of arr1 and arr2, respectively. The dynamic programming table is filled in a bottom-up manner by comparing each pair of elements from the two arrays.
function maxLengthOfRepeatedSubarray(arr1, arr2) {
    let m = arr1.length;
    let n = arr2.length;
    
    let maxLength = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let length = 0;

            // Iterate to find the common subarray length
            while (i + length < m && j + length < n && arr1[i + length] === arr2[j + length]) {
                length++;
            }

            // Update maxLength if the current common subarray is longer
            maxLength = Math.max(maxLength, length);
        }
    }

    return maxLength;
}
O(n*3)
