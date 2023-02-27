function maxSubArraySum(arr) {
  let currSum = 0;
  let maxSum = -Infinity;
  let maxStartIndex = 0;
  let maxEndIndex = -1;
  let currStartEndIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    currSum += arr[i];
    if (currSum > maxSum) {
      maxSum = currSum;
      maxStartIndex = currStartEndIndex;
      maxEndIndex = i;
    }
    if (currSum < 0) {
      currSum = 0;
      currStartEndIndex = i + 1;
    }
  }
  return [maxSum, arr.slice(maxStartIndex, maxEndIndex + 1)];
}
console.log(maxSubArraySum([-1, 1, -2, 2, 3, -1]));
