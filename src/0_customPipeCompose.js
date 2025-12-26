// Custom pipe function
const customPipe = (...functions) => (input) =>
  // Use Array.prototype.reduce to apply functions from left to right
  functions.reduce((result, fn) => 
    // Apply the current function to the accumulated result
    fn(result), 
    // Initial value is the input to the composed function
    input
  );

// Custom compose function
const customCompose = (...functions) => (input) =>
  // Use Array.prototype.reduceRight to apply functions from right to left
  functions.reduceRight((result, fn) => 
    // Apply the current function to the accumulated result
    fn(result), 
    // Initial value is the input to the composed function
    input
  );

// Example usage with customPipe
const add = (x) => x + 5;
const double = (x) => x * 2;
const square = (x) => x ** 2;

const pipedFunction = customPipe(square, double, add);

console.log(pipedFunction(3)); // Output: 17

// Example usage with customCompose
const composedFunction = customCompose(add, double, square);

console.log(composedFunction(3)); // Output: 26
