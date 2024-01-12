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
  
