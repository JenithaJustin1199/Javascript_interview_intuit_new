index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text" onkeyup=optimizedFunction()>
    <script src = "debounce.js"></script>
</body>
</html>


// Counter to keep track of how many times the getData function is called
let counter = 0;

// Function that simulates fetching data
const getData = () => {
  console.log("fetch called", counter++);
};

// Debounce function to limit the frequency of function calls
const debounce = (getData, delay) => {
  // Variable to store the timer ID
  let timer;

  // Returning a function that will be the debounced function
  return function() {
    // 'this' refers to the context in which the debounced function is called
    let context = this;
    // 'arguments' holds the arguments passed to the debounced function
    let args = arguments;

    // Clear the existing timer to prevent the function call
    clearTimeout(timer);

    // Set a new timer to execute the function after the specified delay
    timer = setTimeout(() => {
      // Call the original function with the original context and arguments
      getData.apply(context, args);
    }, delay);
  };
};

// Create a debounced version of the getData function with a 1000ms (1 second) delay
const optimizedFunction = debounce(getData, 1000);

// Example of using the debounced function
// This could be an event handler or any scenario where you want to limit the function calls
optimizedFunction();




//assign this function to variable
//and call this assigned function to evenlistnerFunction
