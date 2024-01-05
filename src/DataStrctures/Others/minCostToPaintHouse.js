function minCostToPaintHouses(costMatrix) {
  const n = costMatrix.length; // Number of houses
  const k = costMatrix[0].length; // Number of colors

  if (n === 0 || k === 0) {
    return 0;
  }

  // Create a DP array to store the minimum cost of painting each house with each color
  const dp = Array.from({ length: n }, () => Array(k).fill(0));

  // Initialize the first row of DP array with the cost of painting the first house
  for (let i = 0; i < k; i++) {
    dp[0][i] = costMatrix[0][i];
  }

  // Iterate over the houses starting from the second house
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < k; j++) {
      // Find the minimum cost of painting the current house with a different color than the previous house
      dp[i][j] = costMatrix[i][j] + Math.min(dp[i - 1][(j + 1) % k], dp[i - 1][(j + 2) % k]);
    }
  }

  // The final result is the minimum cost of painting the last house
  return Math.min(...dp[n - 1]);
}

// Example usage:
const test1 = [
  [2, 3, 2],
  [1, 4, 1]
];

const test2 = [
  [14, 2, 11],
  [11, 14, 5],
  [14, 3, 10]
];

console.log(minCostToPaintHouses(test1)); // Output: 3
console.log(minCostToPaintHouses(test2)); // Output: 10
Approach:

Create a 2D DP array to store the minimum cost of painting each house with each color.
Initialize the first row of the DP array with the cost of painting the first house.
Iterate over the houses starting from the second house.
For each house and color, calculate the minimum cost by considering the minimum cost of painting the previous house with a different color.
The final result is the minimum cost of painting the last house.
Time Complexity:

The time complexity of this solution is O(n * k), where n is the number of houses and k is the number of colors. The algorithm iterates over all houses and colors, filling in the DP array.
