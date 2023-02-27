function PromisepolyFill(executer) {
  let onResolve, onReject, value;
  let isFilFilled = false;
  let isRejected = false;
  let isCalled = false;
  function resolve(val) {
    value = val;
    isFilFilled = true;
    if (typeof onResolve === "function") {
      onResolve(value);
      isCalled(true);
    }
  }
  function reject(val) {
    value = val;
    isRejected = true;
    if (typeof onReject === "function") {
      onReject(value);
      isCalled = true;
    }
  }
  this.then = function (callback) {
    onResolve = callback;
    if (isFilFilled && !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };
  this.catch = function (callback) {
    onReject = callback;
    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }
    return this;
  };
  executer(resolve, reject);
}

function delayMyNamePromise() {
  return new PromisepolyFill((resolve, reject) => {
    //setTimeout(() => {
    resolve("Error");
    //}, 3000);
  });
}

const delayMyName = delayMyNamePromise();
delayMyName.then((res) => {
  console.log(res);
});

PromisepolyFill.resolve = (value) => {
  return new PromisepolyFill(function executer(resolve, reject) {
    resolve(value);
  });
};
PromisepolyFill.reject = (value) => {
  return new PromisepolyFill(function executer(resolve, reject) {
    reject(value);
  });
};

PromisepolyFill.all = (promisesArr) => {
  return new PromisepolyFill((resolve, reject) => {
    let result = [];
    if (!promisesArr.length) {
      resolve(result);
      return;
    }
    let pending = promisesArr.length;
    promisesArr.forEach((promise, idx) => {
      PromisepolyFill.resolve(promise).then((res) => {
        result[idx] = res;
        pending--;
        if (pending === 0) {
          resolve(result);
        }
      }, reject);
    });
  });
};

PromisepolyFill.race = (promisesArr) => {
  return new PromisepolyFill((resolve, reject) => {
    promisesArr.forEach((promise) => {
      promise.then(resolve).catch(reject);
    });
  });
};
// async function delayMyName() {
//   const res = await delayMyNamePromise();
//   console.log(res);
// }
// delayMyName();
