import React, { useState, useCallback } from 'react';

const CallbackExample = () => {
  const [count, setCount] = useState(0);

  // Without useCallback
  // const handleClick = () => {
  //   console.log("Button Clicked!");
  // };

  // With useCallback
  const handleClick = useCallback(() => {
    console.log("Button Clicked! Count:", count);
  }, [count]); // Dependency array ensures the callback is recreated only when 'count' changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <SomeComponent onClick={handleClick} />
    </div>
  );
};

// Component that receives the callback prop
const SomeComponent = ({ onClick }) => {
  return (
    <div>
      <p>Some Component</p>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

export default CallbackExample;
In this example:

useCallback is used to memoize the handleClick function. This ensures that the function is not recreated on every render unless the dependencies in the dependency array ([count] in this case) change.
The SomeComponent receives the memoized callback and uses it as an onClick handler.
Now, let's look at a simple example using useMemo:

jsx
Copy code
import React, { useState, useMemo } from 'react';

const MemoExample = () => {
  const [a, setA] = useState(5);
  const [b, setB] = useState(10);

  // Without useMemo
  // const sum = calculateSum(a, b);

  // With useMemo
  const sum = useMemo(() => calculateSum(a, b), [a, b]); // Dependency array ensures the memoization is recalculated only when 'a' or 'b' changes

  return (
    <div>
      <p>Value of a: {a}</p>
      <p>Value of b: {b}</p>
      <p>Sum: {sum}</p>
      <button onClick={() => setA(a + 1)}>Increment A</button>
      <button onClick={() => setB(b + 1)}>Increment B</button>
    </div>
  );
};

// Function to calculate sum
const calculateSum = (x, y) => {
  console.log("Calculating sum...");
  return x + y;
};

export default MemoExample;
In this example:

useMemo is used to memoize the result of the calculateSum function. The result is recalculated only when the dependencies ([a, b] in this case) change.
The sum variable is updated based on the memoized result of the function.
These examples demonstrate the use of useCallback and useMemo for optimizing performance by memoizing functions and values in React.
