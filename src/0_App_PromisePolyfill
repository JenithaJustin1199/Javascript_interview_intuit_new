// ============================================================================
//                               Promise Polyfill
// ============================================================================

function myPromise(executor) {

    // Stores the success and failure callbacks assigned later via .then/.catch
    let onResolve, onReject;

    // Stores the resolved/rejected value
    let value;

    // State tracking — mirrors internal Promise machinery
    let isFulfilled = false;
    let isRejected = false;

    // Tracks whether callback was already called to avoid double-calls
    let isResolveCalled = false;
    let isRejectCalled = false;

    // ------------------------- RESOLVE --------------------------------------
    function resolve(val) {
        value = val;             // store resolved value
        isFulfilled = true;      // mark promise fulfilled

        // If `.then` was already attached, call the success callback
        if (typeof onResolve === "function" && !isResolveCalled) {
            onResolve(val);
            isResolveCalled = true;
        }
    }

    // ------------------------- REJECT ---------------------------------------
    function reject(val) {
        value = val;             // store rejection value
        isRejected = true;       // mark promise rejected

        // If `.catch` / error callback was attached earlier, call it now
        if (typeof onReject === "function" && !isRejectCalled) {
            onReject(val);
            isRejectCalled = true;
        }
    }

    // --------------------------- THEN ---------------------------------------
    // Supports: .then(success, failure)
    this.then = function (successCB, failCB) {

        onResolve = successCB;
        onReject  = failCB;

        // If resolve already happened before .then()
        if (isFulfilled && !isResolveCalled) {
            onResolve(value);
            isResolveCalled = true;
        }

        // If reject already happened before .then()
        if (isRejected && typeof failCB === "function" && !isRejectCalled) {
            onReject(value);
            isRejectCalled = true;
        }

        return this; // chaining
    };

    // --------------------------- CATCH --------------------------------------
    this.catch = function (cb) {
        onReject = cb;

        // If reject already happened before `.catch()`
        if (isRejected && !isRejectCalled) {
            onReject(value);
            isRejectCalled = true;
        }

        return this;
    };

    // Immediately run executor (same as native Promise)
    executor(resolve, reject);
}


// ============================================================================
//                             TEST FUNCTION
// ============================================================================
function delayMyName(name) {
    return new myPromise((resolve, reject) => {
        console.log("start promise");

        setTimeout(() => {
            reject(name);      // reject after 1 second
        }, 1000);
    });
}


// ============================================================================
//                             myPromise.all
// ============================================================================
// FIXED: last index finishing early is NOT all promises completed.
myPromise.all = function (promises) {

    let result = [];               // array to store resolved values
    let completed = 0;             // count finished promises

    return new Promise((resolve, reject) => {

        if (promises.length === 0) {
            resolve([]);           // empty input → resolve immediately
            return;
        }

        promises.forEach((promise, index) => {

            promise.then(res => {
                result[index] = res;          // store resolved value
                completed++;                  // mark one completed

                if (completed === promises.length) {
                    resolve(result);          // ALL done → resolve
                }

            }).catch(reject);                  // fail-fast behavior
        });
    });
};


// ============================================================================
//                          myPromise.allSettled
// ============================================================================
// FIXED: last index finishing does NOT mean all finished.
myPromise.allSettled = function (promises) {

    let result = [];
    let completed = 0;

    return new Promise((resolve) => {

        if (promises.length === 0) {
            resolve([]);
            return;
        }

        promises.forEach((promise, index) => {

            promise.then(res => {
                result[index] = { status: "fulfilled", value: res };

            }).catch(err => {
                result[index] = { status: "rejected", value: err };

            }).finally(() => {
                completed++;

                // Resolve ONLY when all promises finished
                if (completed === promises.length) {
                    resolve(result);
                }
            });
        });
    });
};


// ============================================================================
//                            myPromise.race
// ============================================================================
// First settled (resolve or reject) wins.
myPromise.race = function (promises) {

    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            promise.then(resolve).catch(reject);
        });
    });
};


// ============================================================================
//                              myPromise.any
// ============================================================================
// FIXED: should reject only if ALL promises reject.
myPromise.any = function (promises) {

    let rejectedCount = 0;

    return new Promise((resolve, reject) => {

        promises.forEach((promise) => {

            promise.then(resolve).catch(() => {

                rejectedCount++;

                if (rejectedCount === promises.length) {
                    reject("All the promises are rejected");
                }
            });
        });
    });
};


// ============================================================================
//                       ASYNC TEST PROMISES (SET B)
// ============================================================================
const async_p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("async p1"), 1000); // rejects after 1s
});

const async_p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("async p2"), 500);  // fastest reject
});

const async_p3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("async p3"), 2000); // slowest
});


// ============================================================================
//                     Final Test Call (Your sample)
// ============================================================================
myPromise.any([async_p1, async_p2, async_p3])
    .then(res => console.log(res))
    .catch(err => console.log(err, "I'm from catch block"));
