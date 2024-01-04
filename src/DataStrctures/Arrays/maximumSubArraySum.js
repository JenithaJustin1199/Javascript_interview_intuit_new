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
