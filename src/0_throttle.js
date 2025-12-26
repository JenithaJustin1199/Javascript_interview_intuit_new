<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick=handleEffectively()></button>
    <script src="throttling.js"></script>
</body>
</html>

// Step 1: Define an expensive function to be throttled
const onClickButton = () => {
    console.log("expensive function");
}

// Step 2: Define a throttle function that limits the frequency of function calls
const throttle = (fun, limit) => {
    // Step 3: Initialize a flag to track if the function can be called
    let flag = true;

    // Step 4: Return a throttled function
    return function() {
        // Step 5: Save the current context and arguments
        let context = this,
            args = arguments;

        // Step 6: Check if the function can be called
        if (flag) {
            // Step 7: Call the original function with the saved context and arguments
            fun.call(context, args);

            // Step 8: Set the flag to false to prevent immediate subsequent calls
            flag = false;

            // Step 9: Set a timeout to reset the flag after the specified limit
            setTimeout(() => {
                flag = true;
            }, limit);
        }
    };
}

// Step 10: Create a throttled version of the onClickButton function with a 1000ms (1 second) limit
const handleEffectively = throttle(onClickButton, 1000);
Explanation:

onClickButton: This is the original function that you want to throttle. In this example, it logs a message.

throttle: This function takes another function (fun) and a time limit (limit) as parameters. It returns a new function that will only execute the original function if a certain amount of time has passed since the last invocation.

flag: This variable is used to track whether the function can be called. If flag is true, the original function is allowed to execute.

Return function: The throttle function returns a new function that wraps the original function.

context and args: These variables store the context (this) and arguments of the current invocation of the throttled function.

Check flag: If the flag is true, the original function is called, and the flag is set to false to prevent immediate subsequent calls.

Set flag to false: This prevents the original function from being called until the timeout expires.

Set timeout: After the specified limit milliseconds, the flag is set to true, allowing the function to be called again.

handleEffectively: This is an example of using the throttled function with a 1-second limit. You can use handleEffectively as an event handler or in any scenario where you want to limit the frequency of function calls.
