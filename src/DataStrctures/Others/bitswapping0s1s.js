Given a string consist of only 0's and 1's. Find the minimum swaps required to convert the string such that all 1's should be together(not necessarily at the begin or end)  - approach, js code with comments, tc
ChatGPT
To solve this problem, we can follow these steps:

Count the total number of 1's in the given string.
Initialize a sliding window of length equal to the count of 1's.
Slide the window through the string, and at each position, calculate the number of 0's inside the window.
The minimum swaps required would be the count of 0's inside the window at each position.
Repeat this process for each possible window position.
The minimum swaps needed would be the minimum count of 0's obtained from all the window positions.
Here's the JavaScript code with comments:

javascript
Copy code
function minSwapsForOnesTogether(str) {
  // Count the total number of 1's in the given string
  let totalOnes = 0;
  for (let char of str) {
    if (char === '1') {
      totalOnes++;
    }
  }

  // Initialize a sliding window of length equal to the count of 1's
  let windowZeros = 0;
  for (let i = 0; i < totalOnes; i++) {
    if (str[i] === '0') {
      windowZeros++;
    }
  }

  // Initialize the minimum swaps needed to the count of 0's in the initial window
  let minSwaps = windowZeros;

  // Slide the window through the string and calculate minimum swaps
  for (let i = totalOnes; i < str.length; i++) {
    // Update the count of 0's inside the window
    if (str[i - totalOnes] === '0') {
      windowZeros--;
    }
    if (str[i] === '0') {
      windowZeros++;
    }

    // Update the minimum swaps needed
    minSwaps = Math.min(minSwaps, windowZeros);
  }

  return minSwaps;
}

// Example usage:
const inputString = '100101';
const result = minSwapsForOnesTogether(inputString);
console.log(result); // Output: 1
Time Complexity:

The time complexity of this solution is O(N), where N is the length of the input string. The algorithm performs a single pass through the string, and the sliding window updates take constant time for each position.
