function subArraywithSum(arr, targetSum) {
  // Initialize pointers and sum
  let left = 0;
  let right = 0;
  let sum = arr[left];
  
  // Initialize result array to store subarrays with the target sum
  let result = [];

  // Iterate through the array using two pointers
  while (left <= right && right < arr.length) {
    // If the current sum equals the target sum, add the subarray to the result
    if (sum === targetSum) {
      result.push(arr.slice(left, right + 1));
      right++;
      sum += arr[right];
    }
    // If the current sum is less than the target sum, move the right pointer to the right
    if (sum < targetSum) {
      right++;
      sum += arr[right];
    }
    // If the current sum is greater than the target sum, move the left pointer to the right
    if (sum > targetSum) {
      sum -= arr[left];
      left++;
    }
  }

  // Return the result array containing subarrays with the target sum
  return result;
}
