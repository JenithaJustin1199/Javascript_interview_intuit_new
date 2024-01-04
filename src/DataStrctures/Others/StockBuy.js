function stockBuySell(prices) {
  // Initialize variables to track minimum, maximum, and initial profit
  let min = prices[0];
  let max = prices[0];
  let profit = max - min;
  
  // Array to store profits at each step
  let profitArr = [profit];

  // Iterate through each price
  for (let i = 0; i < prices.length; i++) {
    // Check if the current price is less than the current minimum
    if (prices[i] < min) {
      // Update both minimum and maximum to the current price
      min = prices[i];
      max = prices[i];
    }

    // Check if the current price is greater than the current maximum
    if (prices[i] > max) {
      // Update only the maximum to the current price
      max = prices[i];
    }

    // Calculate the profit and add to the array
    profitArr.push(max - min);
  }

  // Return the maximum profit from the array
  return Math.max(...profitArr);
}

// Example usage:
console.log(stockBuySell([7, 1, 5, 3, 6, 4]));
O(N)
