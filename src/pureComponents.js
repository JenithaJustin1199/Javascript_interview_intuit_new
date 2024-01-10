In React, a "Pure Component" refers to a component that only re-renders when its props or state change. Pure Components are typically implemented as class components extending React.PureComponent or, in the case of functional components, using the React.memo higher-order component.

For functional components, here is an example of a simple pure component using the React.memo function:

jsx
Copy code
import React from 'react';

// Functional component
const MyPureComponent = React.memo(({ name, age }) => {
  console.log("Rendering MyPureComponent");

  return (
    <div>
      <h2>MyPureComponent</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
});

// Example usage of MyPureComponent
const App = () => {
  const [person, setPerson] = React.useState({
    name: 'John',
    age: 25,
  });

  const updatePerson = () => {
    // This will trigger a re-render of MyPureComponent only if the person object changes
    setPerson({ name: 'Jane', age: 26 });
  };

  return (
    <div>
      <h1>React Pure Component Example</h1>
      <MyPureComponent name={person.name} age={person.age} />
      <button onClick={updatePerson}>Update Person</button>
    </div>
  );
};

export default App;
In this example:

MyPureComponent is a functional component wrapped with React.memo. It will only re-render if its props (name or age) change.

The App component has a state (person), and it renders MyPureComponent with the name and age from the state.

When the "Update Person" button is clicked, it updates the state, triggering a re-render of the App component. However, since the MyPureComponent only depends on the name and age props, it will not re-render unless those props change.

This is a basic example to illustrate the concept of a pure component using the React.memo function. In a real-world scenario, consider using class-based pure components if you need to implement lifecycle methods or have more complex logic.
