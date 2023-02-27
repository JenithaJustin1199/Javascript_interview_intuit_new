function decodeString(str) {
  let stack = [];
  let currNumber = 0;
  let currString = "";
  for (let i = 0; i < str.length; i++) {
    if (/\d/.test(str[i])) {
      currNumber = parseInt(str[i]);
    } else if (str[i] == "[") {
      stack.push(currString);
      stack.push(currNumber);
      currString = "";
      currNumber = 0;
    } else if (str[i] == "]") {
      let num = stack.pop();
      let prevString = stack.pop();
      currString = prevString + currString.repeat(num);
    } else currString += str[i];
  }
  return currString;
}
console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("3[a2[c]]"));
console.log(decodeString("2[abc]3[cd]")); //O(n)
