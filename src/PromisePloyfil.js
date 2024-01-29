// Promise polyfill 

function myPromise(executor){
    let onResolve, onReject,value
    let isFulfilled = false, isRejected = false, isResolveCalled = false,
    isRejectCalled = false

    function resolve(val){
        value = val
        isFulfilled = true
        if(typeof onResolve == "function"){
            onResolve(val)
            isResolveCalled = true
        }
        
    }
    function reject (val){
        value = val
        isRejected = true
        if(typeof onReject == "function"){
            onReject(val)
            isRejectCalled = true
        }
        
    }
    this.then = function(cb){
        onResolve = cb
        if(isFulfilled && !isResolveCalled){
            onResolve(value)
            isResolveCalled = true
        }
        return this
    }
    this.catch = function(cb){
        onReject = cb
        if(isRejected && !isRejectCalled){
            onReject(value)
            isRejectCalled = true
        }
        return this
    }

    executor(resolve,reject)
}
function delayMyName(name){
    return new myPromise((resolve,reject)=>{
        console.log("start promise")
        setTimeout(()=>{
            reject(name)
        },1000)
        //reject(name)
    })
} 
/*delayMyName("Jenitha").
then((res)=>console.log(res)).
catch((error)=>console.log("I'm error",error))*/

myPromise.all = function(promises){
    let result = []
    return new Promise((resolve,reject)=>{
        if(!promises.length){
            resolve(promises)
            return
        }
        promises.forEach((promise,idx)=>{
            promise.then((res)=>{
                result[idx]=res
                if (idx == promises.length-1){
                    resolve(result)
                }
            },reject)
        })
        return result
    })
}
myPromise.allSettled = function(promises){
    let result =[]
    return new Promise((resolve,reject)=>{
        if(!promises.length){
            resolve(promises)
            return
        }
        promises.forEach((promise,idx)=>{
            promise.then((res)=>{
              result[idx]= {"status":"fulfilled","value":res}
            }).catch((errorRes)=>{
                result[idx]={"status":"rejected","value":errorRes}
            }).finally(()=>{
                if(idx==promises.length-1) resolve(result)
            })
        })
        return result
    })
}
myPromise.race = function(promises){
    return new Promise((resolve,reject)=>{
        promises.forEach((promise,idx)=>{
            promise.then((res)=>{
                resolve(res)
            }).catch((res)=>{
                reject(res)
            })
        })
    })
}
myPromise.any = function(promises){
    debugger
    return new Promise((resolve,reject)=>{
        promises.forEach((promise,idx)=>{
            promise.then((res)=>{
                resolve(res)
            }).catch((res)=>{
                if(idx == promises.length-1){
                    reject (("All the promises are rejected"))
                }
            })
        })
    })

}
const async_p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("async p1")
    },1000)
})
const async_p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("async p2")
    },500)
})
const async_p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("async p3")
    },2000)
})
/*const p1 = Promise.resolve("I'm p1")
const p2 = Promise.reject("I'm p2")
const p3 = Promise.reject("I'm p3")*/

//myPromise.race([p1,p2,p3]).then((res)=>console.log(res)).catch((er)=>console.log(er,"I'm from catch block"))
myPromise.any([async_p1,async_p2,async_p3]).then((res)=>console.log(res)).catch((er)=>console.log(er,"I'm from catch block"))
