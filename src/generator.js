What is a Generator?

A generator in JavaScript is a special type of function that:

✔ can pause
✔ can resume
✔ can receive values
✔ can return partial values (yield)
✔ returns an iterator object

Generators are defined using:

function* name() {}


And you control execution manually using:

generator.next()


Each yield pauses the function and returns a value OUT.
When you next(value) again, the generator resumes and receives value IN.

✅ Now your FULL code rewritten + LINE-BY-LINE comments
Generators are used because they give fine-grained control over execution, something normal functions and Promises cannot do.
Below is a clear, interview-level explanation of why generators exist and when they’re useful.

✅ Why Generators Are Used
1. To Pause and Resume Execution (Cooperative Control Flow)

A normal function runs from start → end without stopping.

A generator can run → pause → resume → pause → resume.

function* g() {
  console.log("A");
  yield;
  console.log("B");
}


This gives the developer control:

const it = g();
it.next(); // logs "A"
it.next(); // logs "B"

Why useful?

Because you can model sequences of steps that depend on external events (like async operations, tasks, user events).

2. To Implement Lazy Iteration (On-Demand Data)

Generators allow you to produce values only when needed.

For example, generating an infinite sequence:

function* infiniteNumbers() {
  let n = 1;
  while (true) {
    yield n++;
  }
}


This is impossible with arrays without blowing the memory.

Where used?

✔︎ Pagination
✔︎ Streams
✔︎ Large datasets
✔︎ Infinite sequences
✔︎ Data that is expensive to compute

3. To Write Async Code Without Promises or async/await (Old School Async Control Flow)

Before async/await, generators were used to write async code that looks synchronous.

Your example:

yield asyncOperation1();


Execution pauses until the promise is resolved, then .next() continues.

This is exactly how async/await was built internally:

async/await is syntactic sugar over generators.
4. To Implement Custom Iterators

JavaScript uses the iterator protocol:

for (const v of obj)


Generators make it trivial:

const obj = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
};


Without generators, writing the iterator manually is messy.

5. To Create Coroutine-like Behavior

Generators allow cooperative multitasking.

You can:

Produce a value

Give control back

Resume later

This resembles coroutines in other languages.

Useful for:

✔︎ Animation loops
✔︎ State machines
✔︎ Pipelines
✔︎ Repeatable pause/resume tasks

6. For Complex Control Flows (Retry Logic, Async Pipelines)

Example: async workflow step-by-step:

const r1 = yield fetchUser();
const r2 = yield fetchOrders(r1.userId);


You manually orchestrate how each async step depends on the previous one—similar to middleware.

⭐ Summary: Why Generators Are Used
Reason	Explanation
Pause & resume execution	Functions can stop mid-way and continue later.
Lazy evaluation	Produce values only on demand (infinite sequences, large data).
Asynchronous flow control	Precursor to async/await; easier async sequencing.
Custom iterators	Clean & elegant iterator implementation.
Coroutines	Cooperative multitasking for complex workflows.
Controlled execution	Perfect for retry logic, pipelines, and step-based operations.
Want a short interview-friendly answer?

Here you go:

Generators are used to pause and resume execution, allowing lazy iteration, custom iterators, coroutine-like behavior, and simpler async flow control. They give developers manual control over the execution flow, unlike normal functions.
// ----------------------------------------------
// A simple generator function
// ----------------------------------------------
function* generatorFunction() {   // define a generator using function*
    yield 2;                      // pause here and output 2
    yield 3;                      // pause again and output 3
    yield 5;                      // pause again and output 5
    return 11;                    // finish the generator and return 11 (done: true)
}

// Create an instance of the generator
const generator = generatorFunction();   // generator is now an iterator object


// ----------------------------------------------
// A generator that works with async values
// ----------------------------------------------
function* asyncGenerator() {              // generator that yields promises
    const result1 = yield asyncOperation1();  // pause & output promise1, wait for external .next()
    console.log(result1);                 // when resumed, print resolved value of promise1

    const result2 = yield asyncOperation2();  // pause & output promise2
    console.log(result2);                 // print resolved value when resumed
}


// ----------------------------------------------
// Async operation 1 (returns promise)
// ----------------------------------------------
function asyncOperation1() {
    return new Promise((resolve) =>
        setTimeout(() => resolve('Async Operation 1'), 1000)  // resolves after 1s
    );
}


// ----------------------------------------------
// Async operation 2 (returns promise)
// ----------------------------------------------
function asyncOperation2() {
    return new Promise((resolve) =>
        setTimeout(() => resolve('Async Operation 2'), 1000)  // resolves after 1s
    );
}


// ----------------------------------------------
// USING the generator manually (like we do in co() library)
// ----------------------------------------------
const generatorAsync = asyncGenerator();   // create an iterator of asyncGenerator()

// Start generator execution — first yield returns a Promise
const promise = generatorAsync.next().value;   // .next() runs until yield asyncOperation1()


// Handle the first promise
promise.then((result) => {                   // wait for asyncOperation1() to resolve
    const nextPromise = generatorAsync.next(result).value;  
    // ↳ resume generator, pass resolved result IN
    // ↳ generator yields asyncOperation2(), so nextPromise is the second promise

    // Handle the second promise
    nextPromise.then((result) => {
        generatorAsync.next(result);        // resume generator again with second result
        // generator finishes (no more yields)
    });
});

✅ What is Happening Step-by-Step?
STEP 1: Start generator
const promise = generatorAsync.next().value;


Runs until first yield asyncOperation1()

Returns the promise from asyncOperation1()

Generator pauses

STEP 2: Wait for first promise
promise.then((result) => {


When asyncOperation1 resolves:

We resume the generator with .next(result)

STEP 3: Resume generator
const nextPromise = generatorAsync.next(result).value;


result1 inside generator becomes "Async Operation 1"

It prints it

Reaches next yield asyncOperation2()

Returns second promise

Pauses again

STEP 4: Wait for second promise
nextPromise.then((result) => {
    generatorAsync.next(result); 
});


Pass the second result back into generator

Prints "Async Operation 2"

Generator finishes
