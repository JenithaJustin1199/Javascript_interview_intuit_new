function maxSubArraySum(arr) {
  let currSum = 0;
  let maxSum = -Infinity;
  let maxStartIndex = 0;
  let maxEndIndex = -1;
  let currStartEndIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    // Update the current sum by adding the current element
    currSum += arr[i];

    // Check if the current sum is greater than the maximum sum
    if (currSum > maxSum) {
      maxSum = currSum;
      maxStartIndex = currStartEndIndex;
      maxEndIndex = i;
    }

    // If the current sum becomes negative, reset the sum and update the start index
    if (currSum < 0) {
      currSum = 0;
      currStartEndIndex = i + 1;
    }
  }

  // Return the maximum sum and the subarray with the maximum sum
  return [maxSum, arr.slice(maxStartIndex, maxEndIndex + 1)];
}

// Example usage:
console.log(maxSubArraySum([-1, 1, -2, 2, 3, -1]));

Explanation of the Approach:

Initialization:

currSum: Keeps track of the sum of the current subarray.
maxSum: Maintains the maximum sum found so far (initialized as negative infinity to handle cases where all elements are negative).
maxStartIndex and maxEndIndex: Keep track of the indices of the subarray with the maximum sum.
currStartEndIndex: Keeps track of the starting index of the current subarray.
Main Loop:

Iterate through each element in the array.
Update currSum by adding the current element.
Check if the currSum is greater than the maxSum.
If true, update maxSum and the corresponding start and end indices.
If currSum becomes negative, reset it to 0, and update the starting index for the next potential subarray.
Result:

The function returns an array containing the maximum sum (maxSum) and the subarray with the maximum sum (using slice with maxStartIndex and maxEndIndex).
Time Complexity:

The algorithm traverses the array once, making it an O(N) linear time complexity algorithm, where N is the number of elements in the array.
