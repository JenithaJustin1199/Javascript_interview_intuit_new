// function debounce(fn, delay){
//   let timer
//   return function(...args){
//     clearTimeout(timer)
//     timer = setTimeout(()=>{
//        fn.apply(this,args)
//     },delay)
//   }
// }

// function add(a,b){
//   return a+b
// }

// let adder = debounce(add, 5000 )
// let val = (adder(3,2))
// console.log(val)


function throttle(fn, delay){
  let flag = true
  return function(...args){
    if(flag){
      flag = false
      fn.apply(this, args)
      setTimeout(()=>{
        
        flag = true
      },delay)
    }
  }
}

function flattenNestedArray(arr, n){
  let result = []
  function helper(currArr, depth){
    for(let val of currArr){
      if(Array.isArray(val) && depth<n){
        helper(val, depth+1)
      }else{
        result.push(val)
      }
    }
    
  }
  helper(arr, 0)
  return result
}
let arr = [0,[8,9, [4,5]],[1,2,3]]
// console.log(flattenNestedArray(arr, 1))

function flattenObject(obj, objKey="", result= {}){

  for(let key of Object.keys(obj)){
    let newKey = objKey? `${objKey}.${key}`:key;
    let val = obj[key]
    let isObject = 
      val!== null && 
      typeof val === 'object' 
      && !Array.isArray(val)
    if(isObject && Object.keys(val).length>0){
      flattenObject(val, newKey, result)
    }else{
      result[newKey] = val
    }
  }
  return result
}
let user = {
  user:{
  name: "Jeni",
  age:"26",
  address:{
    line1: "1st street",
    city: 'Bengaluru'
  }
  }
}
const input = {
  a: {},
  b: null,
  c: [1, 2],
  d: {
    e: {
      f: true
    }
  }
};

// console.log(flattenObject(input));
// console.log(flattenObject(user))


Function.prototype.myBind= function(context,...bindArgs){
  let originalFunction = this
  return function(...args){
    return originalFunction.apply(context,[...bindArgs, ...args])
  }
}
function getUserDetail(city, state){
  return this.name+" "+city+" "+state
}
let user1 = {
  name: "Jeni",
  state:"karnataka"
}

let bindFunction = getUserDetail.myBind(user1,"Bengaluru" )
// console.log(bindFunction("Karnataka"))
function multiply(a, b, c) {
  return this.factor * a * b * c;
}

const calculator = { factor: 2 };

const boundMultiply = multiply.myBind(calculator, 3);

// console.log(boundMultiply(4, 5));// Expected: 120



function myPromiseAll(promises){
  return new Promise((resolve, reject)=>{
    let result = []
    let completed = 0
    if(promises.length === 0){
      resolve([])
      return
    }
    promises.forEach((promise, index)=>{
      promise.then((res)=>{
        result[index]=res
        completed++
        if(completed === promises.length){
          resolve(result)
        }
      }).catch(reject)
    })
  })
}
function myAllSettled(promises){
  return new Promise((resolve,reject)=>{
    let result = []
    let completed = 0
    if(promises.length === 0){
      resolve([])
      return
    }
    promises.forEach((promise, index)=>{
      promise.then((res)=>{
        result[index] = {'status':'fulfilled','value':res}
      }).catch((err) =>{
        result[index] = {'status':'Rejected','value':err}
      }).finally(()=>{
        completed++
        if(completed === promises.length) resolve(result)

      })
        
      
    })
  })
}
function myRace(promises){
  return new Promise((resolve,reject)=>{
    promises.forEach(promise=>{
      promise.then(resolve).catch(reject)
    })
  })
}
function myAny(promises){
  return new Promise((resolve, reject)=>{
    let rejectedCount = 0
      promises.forEach((promise)=>{
        promise.then(resolve).catch((err)=>{
          rejectedCount++
          if(rejectedCount === promises.length){
            reject("All ptomises are Rejected!")
          }
        })
      })
  })
}
async function runSequentially(tasks){
  let result = []
  for(let task of tasks){
    let val = await task()
    result.push(val)
  }
  return result
}
function promiseCreator(delay, val, action){
  return new Promise((res,rej)=>{
  setTimeout(()=>{
    console.log(val)
    res(val)
  },delay)
})
}
// let p1 = promiseCreator(500, "P1")
// let p2 = promiseCreator(700, "P2")
// let p3 = promiseCreator(5000, "P3")

const tasks = [
  () => promiseCreator(1000, "A"),
  () => promiseCreator(5000, "B"),
  () => promiseCreator(3000, "C")
];

// myAllSettled([p1,p2,Promise.reject("Rejected")]).then((res)=>console.log(res))
// console.log(runSequentially(tasks).then(console.log))


function sum(a,b,c){
  console.log(a+b+c)
  return a+b+c
}
function curry(fn){
  return function curried(...args){
    if(args.length>=fn.length){
      return fn.apply(this,args)
    }
    return function(...nextArgs){
      return curried.apply(this, [...args,...nextArgs])
    }
  }
}

let curriedSum = curry(sum)
curriedSum(1,2,3)
curriedSum(1)(2)(3)
curriedSum(1,2)(3)

function infiniteSum(...args){
  return function(...nextArgs){
    if(nextArgs.length ==0){
      return args.reduce((a,b)=>a+b,0)
    }
    return infiniteSum(...args, ...nextArgs)
  }
}
// console.log(infiniteSum(2)(3)());
// console.log(infiniteSum(2)(3)(4)());
// console.log(infiniteSum(2)(3)(4)(1,1)())

function deepClone(value, seen = new Map()){
  //handles null, undefines, function 
  if(value === null || value!=='object'){
    return value
  }
  if(value instanceof Date){
    return new Date(value)
  }
  if(seen.has(value)){
    return seen.get(value)
  }
  let copy = Array.isArray(value)?[]:{}
  seen.set(value, copy)
  for(let key of Object.keys(value)){
    copy[key] = deepClone(value[key], seen)
  }
  return copy
}
const obj = {
  name: "Jeni",
  tags: ["a", { x: 1 }],
  address: { city: "Bengaluru" },
  empty: null,
};
obj.self = obj;                       // circular reference

const c = deepClone(obj);
// console.log(c)
function complex(n){
  console.log("...computing")
  return n*n
}
function memoize(fn){
  let cache = new Map()
  return function(...args){
    let key = JSON.stringify(args)
    if(cache.has(key)){
      return cache.get(key)
    }
    let result = fn.call(this, ...args)
    cache.set(key, result)
    return result
  }
}

let memoizedExpensive = memoize(complex)
// console.log(memoizedExpensive(2))
// console.log(memoizedExpensive(2))
// console.log(memoizedExpensive(3))
// console.log(memoizedExpensive(2))

function groupBy(arr, keyFn){
  let result = {}

  for(let item of arr){
    let key
    if(typeof keyFn === 'function'){
      key = keyFn(item)
    }else{
      key = item[keyFn]
    }
    if(!result[key]){
      result[key] = []
    }
    result[key].push(item)
  }
  return result
}
const people = [
  { name: "Jeni", city: "Bengaluru" },
  { name: "Asha", city: "Mysuru" },
  { name: "Ravi", city: "Bengaluru" },
];

console.log(groupBy(people, "city"));
// {
//   Bengaluru: [{ name: "Jeni", ... }, { name: "Ravi", ... }],
//   Mysuru:    [{ name: "Asha", ... }]
// }

console.log(groupBy([1.2, 1.8, 2.1], Math.floor));
// { 1: [1.2, 1.8], 2: [2.1] }


Array.prototype.myReduce = function(callback, initialVal){
  if(typeof callback !== 'function'){
    throw new TypeError(callback + " is not a function")
  }
  let array = this
  let acc; 
  let startIndex;
  let hasInitial = arguments.length >= 2
  if(hasInitial){
    acc=initialVal;
    startIndex=0
  }else{
    if(array.length === 0){
      throw new TypeError("Reduce of empty array with no initial value")
    }
    acc = array[0]
    startIndex = 1
  }
  for(let i=startIndex; i<array.length; i++){
    acc = callback(acc,array[i],i,array)
  }
  return acc
}
// console.log([1,2,3].reduce((acc,curr)=>acc+curr,0))
// console.log([1,2,3].myReduce((acc,curr)=>acc+curr,0))
// console.log([].reduce((acc,curr)=>acc+curr,0))

//In map the hole is preserved.
Array.prototype.myMap = function(callback, thisArg){
  if(typeof callback !== 'function'){
    throw new TypeError(callback + " is not a function")
  }
  const result = new Array(array.length); 
  let array = this
  for(let i=0; i<array.length; i++){
    //preserve the hole
    if(i in array){
      result[i] = callback(thisArg, array[i], i, array)
    }
  }
  return result
}
// console.log([1,,3].map((x)=>x+1))

async function promisePool(tasks, limit){
  let result = new Array(tasks.length)
  let nextIdx = 0;
  async function worker(){
    while(nextIdx < tasks.length){
      let currIdx = nextIdx++
      result[currIdx] = await(tasks[currIdx])()
    }
  }
  let workersLimit = Math.min(tasks.length, limit)
  let workers = []
  for(let i=0; i<workersLimit; i++){
    workers.push(worker())
  }
  await Promise.all(workers)
  return result
}

const tasks1 = [
  () => promiseCreator(1000, "A"),
  () => promiseCreator(5000, "B"),
  () => promiseCreator(3000, "C")
];

console.log(await promisePool(tasks1,2))

 function once(fun){
    let result 
    let called = false
    return function(...args){
        if(!called){
            called = true
            result = fun.apply(this, args)
        }
        return result
    }

}

let onceFunction = once(expensiveFunction)
console.log(onceFunction(2,1,2))//
console.log(onceFunction(2,0,2))//
class EventEmitter{
    constructor(){
        this.events= new Map()
    }
    on(event, listner){
        if(!this.events.has(event)){
            this.events.set(event,[])
        }
        this.events.get(event).push(listner)
        return this
    }
    off(event, listner){
        let listners = this.events.get(event)
        if(!listners) return this

        let index = listners.indexOf(listner)
        if(index != -1){
            listners.splice(index, 1)
        }
        if(listners.length === 0){
            this.events.delete(event)
        }

        return this

    }
    emit(event, ...args){
        let listners = this.events.get(event)
        if(!listners) return false

        for(let listner of [...listners]){
            listner.apply(this, args)
        }
        return true

    }
}

const e = new EventEmitter();

const log = (msg) => console.log("log:", msg);
const print = (msg) => console.log("print:", msg);
e.on("msg", log)
e.on("print",print)
// e.once("msg", (m) => console.log("once:", m));

e.emit("msg", "hi");   // log: hi, once: hi
e.emit("msg", "yo");   // log: yo   (once listener already removed)

e.off("msg",log)
e.emit("msg", "?");    // nothing, returns false
e.emit("print", "hello")
