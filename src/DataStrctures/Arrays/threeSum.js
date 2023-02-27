function threeSum(nums) {
  // Sort the input array in ascending order
  nums.sort((a, b) => a - b);

  const result = [];

  // Loop through the array, fixing each number as the potential first number in the triplet
  for (let i = 0; i < nums.length - 2; i++) {
    // If the current number is the same as the previous one, skip it to avoid duplicates
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // Set left and right pointers to search for the remaining two numbers in the triplet
    let left = i + 1;
    let right = nums.length - 1;

    // Loop through the remaining part of the array using two pointers
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      // If the sum is 0, we found a triplet. Add it to the result array.
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Move the left and right pointers towards the middle of the array
        left++;
        right--;

        // Skip duplicates of left and right pointers to avoid duplicates
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        // If the sum is less than 0, move the left pointer to the right to increase the sum
        left++;
      } else {
        // If the sum is greater than 0, move the right pointer to the left to decrease the sum
        right--;
      }
    }
  }

  return result;
}
