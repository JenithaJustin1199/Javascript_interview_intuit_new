//customMap
Array.prototype.customMap = function (callback) {
  let newResult = [];
  for (let i = 0; i < this.length; i++) {
    newResult.push(callback(this[i], i, this)); //currentEle,ind,this
  }
  return newResult;
};

// console.log([2, 3, 4].customMap((x) => x * 2));

//customForEach
Array.prototype.customforEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
let forEachArr = [1, 2, 3, 3, 4];
// console.log(forEachArr.customforEach((x)=>x*2))
// console.log(forEachArr.forEach((x)=>x*2))
// console.log(forEachArr)

//customFilter

Array.prototype.customFilter = function (callback) {
  let resultArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      resultArr.push(this[i]);
    }
  }
  return resultArr;
};
//console.log(forEachArr.customFilter((x) => x === 3));

//customReducer
Array.prototype.customReducer = function (callback, initialValue) {
  let accumulator = initialValue === undefined ? undefined : initialValue;
  for (let i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback(accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};
function sumAllElements(arr) {
  return arr.customReducer((a, b) => {
    return a + b;
  });
}
//console.log(forEachArr.customReducer((a,b)=>a+b))

//customFlattner
function customFlat(arr, depth = 1) {
  let result = [];
  arr.forEach((ar) => {
    if (Array.isArray(ar) && depth > 0) {
      result.push(...customFlat(ar, depth - 1));
    } else {
      result.push(ar);
    }
  });

  return result;
}
//Array.prototype.customFlattner = customFlat();
console.log(customFlat([1, 2, 4, [6, 5], 9, [9, 0]], 3));

//customOnce
Array.prototype.customOnce = function (callback) {
  let called = false;
  return this.filter(function (item) {
    if (!called) {
      called = true;
      return true;
    }
    return false;
  }).map(callback);
};

console.log(forEachArr.customOnce((x) => x * 2)); // return array

//composePollyfill
const customCompose = function (...funcs) {
  return function (...args) {
    return funcs.reduceRight((arg, fn) => fn(arg), args);
  };
};
function add(a) {
  return a + 3;
}
function sub(a) {
  return a - 1;
}
function multiply(a) {
  return a * 3;
}
const composedResult = customCompose(add, sub, multiply); // from right to left
//console.log(composedResult(5));

//customPipe
Array.prototype.customPipe = function (...funcs) {
  return funcs.reduce((arg, fn) => fn(arg), this);
};

const arr = [1, 2, 3, 4, 5];

const result = arr.customPipe(
  (arr) => arr.filter((num) => num % 2 === 0),
  (arr) => arr.map((num) => num * 2),
  (arr) => arr.reduce((acc, num) => acc + num, 0)
);

console.log(result); //12
