function* generatorFunction(){
    yield 2;
    yield 3;
    yield 5;
    return 11;
}
const generator = generatorFunction();
function* asyncGenerator() {
    const result1 = yield asyncOperation1();
    console.log(result1);
  
    const result2 = yield asyncOperation2();
    console.log(result2);
  }
  
  function asyncOperation1() {
    return new Promise((resolve) => setTimeout(() => resolve('Async Operation 1'), 1000));
  }
  
  function asyncOperation2() {
    return new Promise((resolve) => setTimeout(() => resolve('Async Operation 2'), 1000));
  }
  
  const generatorAsync = asyncGenerator();
  const promise = generatorAsync.next().value;
  
  
  promise.then((result) => {
    const nextPromise = generatorAsync.next(result).value;
    
    nextPromise.then((result) => {
        generatorAsync.next(result);
    });
  });
  
