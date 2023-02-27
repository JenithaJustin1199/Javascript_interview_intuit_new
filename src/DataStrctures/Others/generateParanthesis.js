function generateParanthesis(n) {
  let result = [];
  function loopIterator(str, open, close) {
    if (open > n || close > n || open > close) return;
    if (str.length === n * 2 && open === close) {
      result.push(str);
      return;
    }

    loopIterator(str + "(", open, close + 1);
    loopIterator(str + ")", open + 1, close);
  }
  loopIterator("", 0, 0);
  return result;
}
console.log(generateParanthesis(3));
