import React from 'react';

// Higher Order Component function
const withCustomProp = (WrappedComponent) => {
  // Returning a functional component
  return (props) => {
    // Adding a custom prop to the wrapped component
    const customPropValue = 'This is a custom prop value';
    return <WrappedComponent customProp={customPropValue} {...props} />;
  };
};

// Component to be enhanced (functional component)
const DisplayCustomProp = ({ customProp }) => {
  return (
    <div>
      <p>Component with Custom Prop:</p>
      <p>{customProp}</p>
    </div>
  );
};

// Using the Higher Order Component
const DisplayWithCustomProp = withCustomProp(DisplayCustomProp);

// Example usage in another component or file
const App = () => {
  return (
    <div>
      <DisplayWithCustomProp />
    </div>
  );
};

export default App;
