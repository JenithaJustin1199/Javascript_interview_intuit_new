// Step 1: Define a Promise polyfill function
function PromisepolyFill(executer) {
  // Step 2: Initialize variables for onResolve, onReject, value, and flags
  let onResolve, onReject, value;
  let isFilFilled = false;
  let isRejected = false;
  let isCalled = false;

  // Step 3: Define the resolve function
  function resolve(val) {
    // Set the value and update flags
    value = val;
    isFilFilled = true;

    // If onResolve is a function, call it with the resolved value
    if (typeof onResolve === "function") {
      onResolve(value);
      
      // Mark the promise as called
      isCalled(true);
    }
  }

  // Step 4: Define the reject function
  function reject(val) {
    // Set the value and update flags
    value = val;
    isRejected = true;

    // If onReject is a function, call it with the rejected value
    if (typeof onReject === "function") {
      onReject(value);

      // Mark the promise as called
      isCalled = true;
    }
  }

  // Step 5: Define the 'then' method
  this.then = function (callback) {
    // Set onResolve to the provided callback
    onResolve = callback;

    // If the promise is already fulfilled and not yet called, call the callback
    if (isFilFilled && !isCalled) {
      isCalled = true;
      onResolve(value);
    }

    // Return the current instance for chaining
    return this;
  };

  // Step 6: Define the 'catch' method
  this.catch = function (callback) {
    // Set onReject to the provided callback
    onReject = callback;

    // If the promise is already rejected and not yet called, call the callback
    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }

    // Return the current instance for chaining
    return this;
  };

  // Step 7: Execute the provided executor function
  executer(resolve, reject);
}

// Step 8: Define a utility function 'delayMyNamePromise'
function delayMyNamePromise() {
  return new PromisepolyFill((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., fetching data)
    resolve("Error");
  });
}

// Step 9: Create a promise instance using 'delayMyNamePromise'
const delayMyName = delayMyNamePromise();

// Step 10: Use the 'then' method to handle the resolved value
delayMyName.then((res) => {
  console.log(res);
});

// Step 11: Add static methods to the PromisepolyFill for 'resolve' and 'reject'
PromisepolyFill.resolve = (value) => {
  return new PromisepolyFill(function executer(resolve, reject) {
    resolve(value);
  });
};

PromisepolyFill.reject = (value) => {
  return new PromisepolyFill(function executer(resolve, reject) {
    reject(value);
  });
};

// Step 12: Add a static method for 'all' to handle an array of promises
PromisepolyFill.all = (promisesArr) => {
  return new PromisepolyFill((resolve, reject) => {
    let result = [];

    // If the promises array is empty, resolve immediately with an empty result array
    if (!promisesArr.length) {
      resolve(result);
      return;
    }

    let pending = promisesArr.length;

    // Iterate through promises and resolve when all promises are resolved
    promisesArr.forEach((promise, idx) => {
      PromisepolyFill.resolve(promise).then(
        (res) => {
          result[idx] = res;
          pending--;

          // If all promises are resolved, resolve with the result array
          if (pending === 0) {
            resolve(result);
          }
        },
        reject
      );
    });
  });
};
// Check if Promise.allSettled is not supported by the environment
if (!Promise.allSettled) {
  // Define Promise.allSettled polyfill
  Promise.allSettled = (promisesArr) => {
    // Return a new Promise
    return new Promise((resolve) => {
      // Initialize an array to store settled results
      let settledResults = [];

      // If the promises array is empty, resolve immediately with an empty result array
      if (!promisesArr.length) {
        resolve(settledResults);
        return;
      }

      // Counter to track the number of promises yet to be settled
      let pending = promisesArr.length;

      // Iterate through promises and update the settledResults array when each promise is settled
      promisesArr.forEach((promise, idx) => {
        // Convert each item in the array to a Promise (using Promise.resolve)
        Promise.resolve(promise)
          .then(
            // On fulfillment, store the result as an object with 'status' and 'value' properties
            (value) => {
              settledResults[idx] = { status: 'fulfilled', value };
            }
          )
          .catch(
            // On rejection, store the reason as an object with 'status' and 'reason' properties
            (reason) => {
              settledResults[idx] = { status: 'rejected', reason };
            }
          )
          .finally(() => {
            // Decrease the pending count for each settled promise
            pending--;

            // If all promises are settled, resolve with the settledResults array
            if (pending === 0) {
              resolve(settledResults);
            }
          });
      });
    });
  };
}

// Example usage:
const promises = [
  Promise.resolve(1),
  Promise.reject("Error"),
  Promise.resolve("Success"),
];

Promise.allSettled(promises).then((results) => {
  console.log(results);
});

// Step 13: Add a static method for 'race' to resolve or reject as soon as one of the promises settles
PromisepolyFill.race = (promisesArr) => {
  return new PromisepolyFill((resolve, reject) => {
    // Iterate through promises and resolve or reject as soon as one settles
    promisesArr.forEach((promise) => {
      promise.then(resolve).catch(reject);
    });
  });
};

// Check if Promise.any is not supported by the environment
if (!Promise.any) {
  // Define Promise.any polyfill
  Promise.any = (promisesArr) => {
    // Return a new Promise
    return new Promise((resolve, reject) => {
      // If the promises array is empty, reject immediately with an AggregateError
      if (!promisesArr.length) {
        reject(new AggregateError("No promises to race", { errors: [] }));
        return;
      }

      // Counter to track the number of promises yet to settle
      let pending = promisesArr.length;

      // Iterate through promises and resolve as soon as one settles
      promisesArr.forEach((promise) => {
        // Convert each item in the array to a Promise (using Promise.resolve)
        Promise.resolve(promise)
          .then(
            // On fulfillment, immediately resolve with the fulfilled value
            (value) => {
              resolve(value);
            }
          )
          .catch(
            // On rejection, store the reason in the errors array
            (reason) => {
              pending--;

              // If all promises are rejected, reject with an AggregateError
              if (pending === 0) {
                reject(new AggregateError("All promises were rejected", { errors: promisesArr }));
              }
            }
          );
      });
    });
  };
}

// Example usage:
const promises = [
  Promise.reject("First error"),
  Promise.resolve("Success"),
  Promise.reject("Second error"),
];

Promise.any(promises)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

