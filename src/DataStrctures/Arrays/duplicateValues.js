function duplicateValues(arr) {
  let freqMapper = {};
  let duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    if (freqMapper[arr[i]]) {
      duplicates.push(arr[i]);
    } else {
      freqMapper[arr[i]] = true;
    }
  }
  return duplicates;
}

console.log(duplicateValues([9, 9, 7, 6, 4, 4, 4, 2, 1]));
