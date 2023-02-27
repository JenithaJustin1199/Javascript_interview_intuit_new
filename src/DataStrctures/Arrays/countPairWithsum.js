function countPairWithSum(arr, sum) {
  let result = [];
  let freqMapper = {};
  for (let i = 0; i < arr.length; i++) {
    let comp = sum - arr[i];
    if (freqMapper[comp]) {
      result.push([comp, arr[i]]);
    }
    freqMapper[arr[i]] = true;
  }
  return result;
}
console.log(countPairWithSum([1, 2, 3, 4, 5], 5));
