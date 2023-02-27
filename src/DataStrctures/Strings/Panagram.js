function isPanagram(str) {
  let newArr = new Array(26).fill(false);
  let index;
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "z") {
      index = str.charCodeAt(i) - "A".charCodeAt(0);
    }
    if (str[i] >= "a" && str[i] <= "z") {
      index = str.charCodeAt(i) - "a".charCodeAt(0);
    } else continue;
    newArr[index] = true;
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === false) return false;
  }
  return true;
}
console.log(isPanagram("abcdefijklmnopqrstuvwxyz"));
