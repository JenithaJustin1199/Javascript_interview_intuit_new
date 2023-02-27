function distinctSubString(str) {
  let n = str.length;
  let subStringSet = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      subStringSet.add(str.slice(i, j));
    }
  }
  return [subStringSet.size, subStringSet];
}

console.log(distinctSubString("abc"));
