//caching,memoization
//context is optional
function memoization(funct, context) {
  const res = {};
  return function (...args) {
    var cachedValue = JSON.stringify(args);
    if (!res[cachedValue]) {
      res[cachedValue] = funct.call(context || this, ...args);
    }
    return res[cachedValue];
  };
}
//Driver code
const multiply = (n1, n2) => {
  for (let i = 0; i < 10000; i++) {}
  return n1 * n2;
};
const cachedMultiply = memoization(multiply);
console.log(cachedMultiply(2, 3));

//currying/infinite

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}
//Driver code
console.log(add(5)(2)()); //infinite currying()
