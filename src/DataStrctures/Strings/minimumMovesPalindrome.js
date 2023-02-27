function minimumPalindromemoves(s) {
  let moves = 0;
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      moves += Math.abs(s.charCodeAt(left) - s.charCodeAt(right));
    }
    left++;
    right--;
  }
  return moves;
}
console.log(minimumPalindromemoves("abaaccle"));
