function stockBuySell(prices) {
  let min = prices[0];
  let max = prices[0];
  let profit = max - min;
  let profitArr = [profit];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
      max = prices[i];
    }
    if (prices[i] > max) {
      max = prices[i];
    }
    profitArr.push(max - min);
  }

  return Math.max(...profitArr);
}
console.log(stockBuySell([7, 1, 5, 3, 6, 4]));
