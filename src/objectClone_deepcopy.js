In JavaScript, there are several ways to clone an object. The most common methods include:

Using Object.assign:

javascript
Copy code
const originalObject = { key1: 'value1', key2: 'value2' };
const clonedObject = Object.assign({}, originalObject);
Using Spread Operator:

javascript
Copy code
const originalObject = { key1: 'value1', key2: 'value2' };
const clonedObject = { ...originalObject };
Using JSON.stringify and JSON.parse:

javascript
Copy code
const originalObject = { key1: 'value1', key2: 'value2' };
const clonedObject = JSON.parse(JSON.stringify(originalObject));
Note: This method has limitations. It doesn't handle functions, non-JSON serializable values, or circular references.

Using Lodash (a utility library):

javascript
Copy code
const _ = require('lodash'); // Install using npm or yarn
const originalObject = { key1: 'value1', key2: 'value2' };
const clonedObject = _.cloneDeep(originalObject);
Using Object.create:

javascript
Copy code
const originalObject = { key1: 'value1', key2: 'value2' };
const clonedObject = Object.create(originalObject);
Note: This method creates a new object with the original object as its prototype. It may not work as expected for certain use cases.

Choose the method that best fits your requirements and the complexity of your object. 
  The first two methods are commonly used for shallow cloning, while the third method is used for deep cloning.
  If your object contains nested objects or functions, it's advisable to use a deep cloning method,
  like Object.assign or the spread operator. If you're working with complex data structures,
  consider using a library like Lodash for more comprehensive cloning options.


  function deepCopy(obj) {
  const jsonString = JSON.stringify(obj);
  const copy = JSON.parse(jsonString);
  return copy;
}

// Step 2: Start with a Shallow Copy
function shallowCopy(obj) {
    return { ...obj };
  }
  
  // Step 3: Recursive Deep Copy
  function deepCopy(obj) {
    // Check if obj is an object or array
    if (typeof obj !== 'object' || obj === null) {
      return obj; // Return non-objects as is
    }
  
    // Create a new object or array
    const copy = Array.isArray(obj) ? [] : {};
  
    // Iterate over the properties or elements and recursively deep copy them
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        copy[key] = deepCopy(obj[key]);
      }
    }
  
    return copy;
  }
  
  // Step 4: Test the Deep Copy Function
  const originalObject = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA',
    },
    hobbies: ['reading', 'coding'],
  };
  
  const copiedObject = deepCopy(originalObject);
  
  console.log(copiedObject);
  
