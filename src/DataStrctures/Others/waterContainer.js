function waterContainer(height) {
  // Initialize pointers for the left and right ends of the array
  let left = 0;
  let right = height.length - 1;

  // Initialize an array to store the areas of containers at each step
  let arr = [];

  // Iterate while the left pointer is less than the right pointer
  while (left < right) {
    let currArea;

    // Calculate the current container area based on the shorter height
    if (height[left] < height[right]) {
      currArea = height[left] * (right - left);
      arr.push(currArea);
      left++;
    } else {
      currArea = height[right] * (right - left);
      arr.push(currArea);
      right--;
    }
  }

  // Log the array containing areas of each container
  console.log(arr);

  // Return the maximum area from the array and subtract 1 (as per the provided code)
  return Math.max(...arr) - 1;
}

// Example usage:
console.log(waterContainer([1, 8, 6, 2, 5, 4, 8, 3, 7]));
