const debounce = (cb, d) => {
  let timer;
  return function (...args) {
    if (timer) clearInterval(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

const throttle = (cb, d) => {
  let last = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - last < d) return;
    last = now;
    return cb(...args);
  };
};

//assign this function to variable
//and call this assigned function to evenlistnerFunction
