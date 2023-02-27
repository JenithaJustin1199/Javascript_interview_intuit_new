function subArraywithSum(arr, targetSum) {
  let left = 0;
  let right = 0;
  let sum = arr[left];
  let result = [];
  while (left <= right && right < arr.length) {
    if (sum === targetSum) {
      result.push(arr.slice(left, right + 1));
      right++;
      sum += arr[right];
    }
    if (sum < targetSum) {
      right++;
      sum += arr[right];
    }
    if (sum > targetSum) {
      sum -= arr[left];
      left++;
    }
  }
  return result;
}
console.log(subArraywithSum([1, 2, 3, 4, 5], 6)); //O(n)
