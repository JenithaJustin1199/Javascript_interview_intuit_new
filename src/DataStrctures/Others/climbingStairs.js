with dp 
Approach:

This problem can be solved using dynamic programming. The key observation is that the number of ways to climb to the top from the current step is the sum of the number of ways from the previous step and the step before the previous one. Let's define a DP array where dp[i] represents the number of ways to climb to the ith step. The recurrence relation is given by:

�
�
[
�
]
=
�
�
[
�
−
1
]
+
�
�
[
�
−
2
]
dp[i]=dp[i−1]+dp[i−2]

Algorithm:

Create a DP array of size n+1 to store the number of ways to climb to each step.
Initialize base cases: 
�
�
[
0
]
=
1
dp[0]=1 and 
�
�
[
1
]
=
1
dp[1]=1 (there is one way to climb to the 0th and 1st steps).
Iterate from the 2nd step to the nth step, filling in the DP array using the recurrence relation.
The final result is stored in 
�
�
[
�
]
dp[n].
Code with Comments:

javascript
Copy code
function climbStairs(n) {
  // Base cases
  if (n === 0 || n === 1) {
    return 1;
  }

  // Create a DP array to store the number of ways to climb to each step
  const dp = new Array(n + 1);

  // Initialize base cases
  dp[0] = 1;
  dp[1] = 1;

  // Iterate from the 2nd step to the nth step
  for (let i = 2; i <= n; i++) {
    // Use the recurrence relation to fill in the DP array
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  // The final result is stored in dp[n]
  return dp[n];
}

// Example usage:
const example1 = 2;
console.log(climbStairs(example1)); // Output: 2

const example2 = 3;
console.log(climbStairs(example2)); // Output: 3
Time Complexity:

The time complexity of this solution is O(n), where n is the number of steps. The algorithm fills in the DP array in a single pass, calculating the number of ways for each step.


  without dp 
function climbStairs(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return climbStairs(n - 1) + climbStairs(n - 2);
}

// Example usage:
const example1 = 2;
console.log(climbStairs(example1)); // Output: 2

const example2 = 3;
console.log(climbStairs(example2)); // Output: 3
Approach:

The base cases are 
�
=
0
n=0 and 
�
=
1
n=1, where there is only one way to climb.
For any other step (
�
≥
2
n≥2), the number of ways to climb to the current step is the sum of the ways to climb to the previous two steps.
Time Complexity:

The time complexity of this recursive solution is exponential, specifically 
�
(
2
�
)
O(2 
n
 ). This is because the function recursively explores all possible combinations, leading to repeated calculations and inefficient performance for larger values of 
�
n.
