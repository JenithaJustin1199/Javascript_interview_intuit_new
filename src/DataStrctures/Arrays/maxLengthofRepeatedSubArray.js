function maxLengthOfRepeatedSubarray(arr1, arr2) {
  let m = arr1.length();
  let n = arr2.length();
  let dp = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));
  let maxlength = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (arr1[i - 1] === arr2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        maxlength = Math.max(maxlength, dp[i][j]);
      }
    }
  }
  return maxlength;
}
