function waterContainer(height) {
  let left = 0;
  let right = height.length - 1;
  let arr = [];
  while (left < right) {
    let currArea;
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
  console.log(arr);
  return Math.max(...arr) - 1;
}
console.log(waterContainer([1, 8, 6, 2, 5, 4, 8, 3, 7]));
