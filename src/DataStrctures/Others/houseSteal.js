If you want to solve the problem without dynamic programming, you can use a simple recursive approach with memoization. Here's a JavaScript implementation:

javascript
Copy code
function maxStolenValue(hval) {
  const n = hval.length;
  const memo = new Array(n).fill(-1);

  function stealFromHouse(index) {
    if (index < 0) {
      return 0;
    }

    if (memo[index] !== -1) {
      return memo[index];
    }

    // The thief has two options: steal from the current house or skip it
    const stealCurrent = hval[index] + stealFromHouse(index - 2);
    const skipCurrent = stealFromHouse(index - 1);

    // Choose the maximum between stealing from the current house or skipping it
    const result = Math.max(stealCurrent, skipCurrent);

    // Memoize the result
    memo[index] = result;

    return result;
  }

  // Start stealing from the last house
  return stealFromHouse(n - 1);
}

// Example usage:
const hval1 = [6, 7, 1, 3, 8, 2, 4];
console.log(maxStolenValue(hval1));  // Output: 19

const hval2 = [5, 3, 4, 11, 2];
console.log(maxStolenValue(hval2));  // Output: 16
This solution uses a recursive function stealFromHouse to explore all possible combinations of stealing and skipping houses. The results are memoized to avoid redundant calculations.

Time Complexity:
The time complexity of this recursive solution is exponential, but memoization helps avoid redundant calculations and significantly improves the performance for repeated subproblems.


  with dp:
Approach:

This problem can be solved using dynamic programming. The idea is to use an array to keep track of the maximum stolen value up to the current house. For each house, the thief has two options: either steal from the current house and the one before the previous house, or skip the current house and take the maximum stolen value from the previous house. The maximum stolen value at each house is the maximum of these two options.

Algorithm:

Create an array dp to store the maximum stolen value up to each house.
Initialize the first two elements of dp with the values of the first two houses.
Iterate from the third house to the end, and for each house, calculate the maximum stolen value using the formula: dp[i] = Math.max(dp[i-2] + hval[i], dp[i-1]).
The final answer is the maximum value in the dp array.
Code with Comments:

javascript
Copy code
function maxStolenValue(hval) {
  const n = hval.length;

  // Base cases
  if (n === 0) return 0;
  if (n === 1) return hval[0];

  // Initialize dp array to store maximum stolen value at each house
  const dp = new Array(n);

  // Initialize the first two elements of dp
  dp[0] = hval[0];
  dp[1] = Math.max(hval[0], hval[1]);

  // Iterate from the third house to the end
  for (let i = 2; i < n; i++) {
    // Calculate the maximum stolen value at the current house
    dp[i] = Math.max(dp[i-2] + hval[i], dp[i-1]);
  }

  // The final answer is the maximum value in dp
  return dp[n-1];
}

// Example usage:
const hval1 = [6, 7, 1, 3, 8, 2, 4];
console.log(maxStolenValue(hval1));  // Output: 19

const hval2 = [5, 3, 4, 11, 2];
console.log(maxStolenValue(hval2));  // Output: 16
Time Complexity:

The time complexity of this solution is O(n), where n is the number of houses. This is because we iterate through the array once to fill in the dp array.
  
