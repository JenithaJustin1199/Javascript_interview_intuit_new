function compareVersions(version1, version2) {
  // Split versions into arrays of integers
  let v1 = version1.split(".");
  let v2 = version2.split(".");
  
  // Determine the maximum length of the two arrays
  const len = Math.max(v1.length, v2.length);
  
  // Iterate through each segment of the versions
  for (let i = 0; i < len; i++) {
    // Extract the numerical value at the current segment (or default to 0)
    const n1 = i < v1.length ? parseInt(v1[i]) : 0;
    const n2 = i < v2.length ? parseInt(v2[i]) : 0;
    
    // Compare the numerical values
    if (n1 > n2) return true;
    if (n1 < n2) return false;
  }
  
  // If all segments are equal, versions are considered equal
  return "equal";
}

// Example usage:
console.log(compareVersions("7.5.6.4", "7.5.3")); O(N)

console.log("<<<<>>>>==<<<<<".match(/([<,=,>])\1+/g));
