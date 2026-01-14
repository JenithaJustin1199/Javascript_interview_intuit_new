// Step 1: Define an object with some properties
let obj = {
    fname: "Jenitha",
    secName: "Justin"
}

// Step 2: Define a function that prints names along with additional parameters
function printname(location, state, nat) {
    // Use 'this' to access properties from the calling context (in this case, the object 'obj')
    console.log(this.fname, this.secName, location, state, nat);
}

// Step 3: Use the 'bind' method to create a new function with a specified context (obj)
const useBind = printname.bind(obj);

// Step 4: 'useBind' is now a function with the 'obj' as its 'this' context
// useBind(); // Uncomment to execute the function

// Step 5: Extend the Function prototype to create a custom 'myBind' method
Function.prototype.myBind = function (...args) {
    // Save a reference to the original function
    let fn = this;

    // Extract the context and additional parameters
    let params = args.slice(1);

    // Return a new function with the specified context and merged parameters
    return function (...args2) {
        fn.apply(args[0], [...params, ...args2]);
    };
}

// Step 6: Use the custom 'myBind' method to create a new function with a specified context ('obj') and initial parameters ("cbe")
const useMyBind = printname.myBind(obj, "cbe");

// Step 7: Call the created function with additional parameters ("TamilNadu", "ind")
useMyBind("TamilNadu", "ind");
Explanation:

obj: An object with properties fname and secName.

printname: A function that prints names along with additional parameters. Uses this to access properties from the calling context.

useBind: Uses the bind method to create a new function (useBind) with the context set to obj. The original function is not executed immediately.

Function.prototype.myBind: Extends the Function prototype to create a custom myBind method. This method returns a new function with a specified context and merged parameters.

useMyBind: Uses the custom myBind method to create a new function (useMyBind) with the context set to obj and initial parameters set to "cbe".

Execution: Calls the useMyBind function with additional parameters "TamilNadu" and "ind". The printname function is then executed with the combined parameters.
