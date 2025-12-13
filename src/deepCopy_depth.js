function deepCopy(value, visited = new Map()) {
  // Step 1: Handle primitive values and functions
  // Primitive values (number, string, boolean, null, undefined)
  // and functions do NOT need deep copying
  if (value === null || typeof value !== "object") {
    return value;
  }

  // Step 2: Handle circular references
  // If we've already copied this object, return the stored copy
  // This prevents infinite recursion for circular structures
  if (visited.has(value)) {
    return visited.get(value);
  }

  // Step 3: Handle Date objects
  if (value instanceof Date) {
    // Create a new Date with the same timestamp
    return new Date(value.getTime());
  }

  // Step 4: Handle Map objects
  if (value instanceof Map) {
    // Create a new empty Map
    const mapCopy = new Map();

    // Store reference early to handle circular references
    visited.set(value, mapCopy);

    // Deep copy each key-value pair
    value.forEach((mapValue, mapKey) => {
      mapCopy.set(
        deepCopy(mapKey, visited),    // Deep copy key
        deepCopy(mapValue, visited)   // Deep copy value
      );
    });

    return mapCopy;
  }

  // Step 5: Handle Set objects
  if (value instanceof Set) {
    // Create a new empty Set
    const setCopy = new Set();

    // Store reference early to handle circular references
    visited.set(value, setCopy);

    // Deep copy each value in the set
    value.forEach((setValue) => {
      setCopy.add(deepCopy(setValue, visited));
    });

    return setCopy;
  }

  // Step 6: Handle Arrays
  if (Array.isArray(value)) {
    // Create a new empty array
    const arrayCopy = [];

    // Store reference early to handle circular references
    visited.set(value, arrayCopy);

    // Iterate over array elements
    for (let i = 0; i < value.length; i++) {
      // Deep copy each element
      arrayCopy[i] = deepCopy(value[i], visited);
    }

    return arrayCopy;
  }

  // Step 7: Handle plain Objects
  // Create a new object with the same prototype
  const objectCopy = Object.create(Object.getPrototypeOf(value));

  // Store reference early to handle circular references
  visited.set(value, objectCopy);

  // Copy over all own enumerable properties
  for (const key of Object.keys(value)) {
    // Deep copy each property value
    objectCopy[key] = deepCopy(value[key], visited);
  }

  return objectCopy;
}
