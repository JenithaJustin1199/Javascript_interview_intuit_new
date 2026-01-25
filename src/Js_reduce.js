Array.prototype.myReduce = function myReduce(callback, initialValue){
    let array = this;
    let acc;
    let startIdx;
    if(initialValue !== undefined){
        acc = initialValue
        startIdx = 0
    }else{
        acc = array[0]
        startIdx = 1
    }
    for(let i=startIdx; i<array.length; i++){
        acc = callback(acc,array[i], i, array)
    }
    return acc
}
