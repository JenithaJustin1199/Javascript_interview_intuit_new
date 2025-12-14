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
  function deepCopyObject(obj) {

  // Base Case:
  // If obj is null OR not an object, return as-is
  // (primitives are immutable and safe to return)
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle Arrays separately
  if (Array.isArray(obj)) {
    // Create a new array and recursively copy each element
    return obj.map(deepCopyObject);
  }

  // For plain objects, create a new object
  const result = {};

  // Iterate over own properties of the object
  for (const key in obj) {

    // Ensure we only copy own properties (not inherited)
    if (obj.hasOwnProperty(key)) {

      // Recursively copy each property value
      result[key] = deepCopyObject(obj[key]);
    }
  }

  // Return the fully deep-copied object
  return result;
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

Circular Reference
✅ Definition

A circular reference happens when an object references itself directly or indirectly, forming a loop.

Example
const obj = { name: "Alice" };

// Object references itself
obj.self = obj;

console.log(obj.self.self.self.name); // "Alice"
  
