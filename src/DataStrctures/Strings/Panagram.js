function isPanagram(str) {
  // Create an array of 26 boolean values, initialized to false
  let newArr = new Array(26).fill(false);
  let index;

  // Iterate through each character in the input string
  for (let i = 0; i < str.length; i++) {
    // Check if the character is an uppercase letter
    if (str[i] >= "A" && str[i] <= "Z") {
      index = str.charCodeAt(i) - "A".charCodeAt(0);
    }
    // Check if the character is a lowercase letter
    if (str[i] >= "a" && str[i] <= "z") {
      index = str.charCodeAt(i) - "a".charCodeAt(0);
    } else {
      // Skip non-alphabetic characters
      continue;
    }

    // Set the corresponding index in newArr to true
    newArr[index] = true;
  }

  // Check if all elements in newArr are true
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === false) {
      // If any element is false, the string is not a pangram
      return false;
    }
  }

  // If all elements are true, the string is a pangram
  return true;
}

// Example usage:
console.log(isPanagram("abcdefijklmnopqrstuvwxyz")); TC - O(n)
