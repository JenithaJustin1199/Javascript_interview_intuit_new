
Without using dynamic programming, you can solve this problem using recursion. Here's a JavaScript solution without dynamic programming:

javascript
Copy code
function countPossibleScoresRecursive(n) {
  // Base cases
  if (n === 0) return 1; // There is one way to score 0 runs (no balls played)
  if (n < 0) return 0; // Negative number of balls, no possible score

  // Recursively calculate the count for the current number of balls
  return (
    countPossibleScoresRecursive(n - 1) +
    countPossibleScoresRecursive(n - 2) +
    countPossibleScoresRecursive(n - 3)
  );
}

// Example usage:
const numberOfBalls = 5;
const result = countPossibleScoresRecursive(numberOfBalls);
console.log(result); // Output: 13
Explanation:

This solution uses a recursive approach to calculate the number of possible scores after n balls. The base cases handle scenarios where there are no balls or a negative number of balls.

The recursive calls calculate the count for the current number of balls by summing up the counts for scoring 1, 2, or 3 runs in the previous balls.

Time Complexity:

The time complexity of this recursive solution is exponential, specifically 
�
(
3
�
)
O(3 
n
 ). This is because the function recursively explores all possible combinations, leading to repeated calculations and inefficient performance for larger values of 
�
n.
