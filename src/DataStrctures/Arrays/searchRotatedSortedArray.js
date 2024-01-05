function searchInRotatedArray(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // Calculate the middle index
    let mid = Math.floor((left + right) / 2);

    // Check if the middle element is the target
    if (nums[mid] === target) {
      return mid;
    }

    // Determine which half is sorted and adjust the search range
    if (nums[left] <= nums[mid]) {
      // Left half is sorted
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // Right half is sorted
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  // If the target is not found, return -1
  return -1;
}
O(nlogn)

Approach:

The problem involves searching for a target element in a rotated sorted array. Here's a step-by-step approach:

Find the Pivot:

Identify the pivot element, which is the element where the rotation occurred. The pivot is the only element for which the previous element is greater than itself.
Determine Search Range:

Based on the target value and the pivot, decide which half of the array to search. If the target is in the range of the left half or the right half, focus the search on that half.
Binary Search:

Perform binary search in the selected range. Adjust the search range based on the comparison between the target and the elements at the start, middle, and end of the current range.
Handle Rotation:

When comparing values, consider the rotation and adjust comparisons accordingly.
