let obj = {
    fname: "Jenitha",
    secName: "Justin"

}

function printname(location,state,nat){
    console.log(this.fname,this.secName,location,state,nat)
}

const useBind = printname.bind(obj)

//useBind()

Function.prototype.myBind = function(...args){
let obj = this
let params = args.slice(1)
    return function(...args2){   
obj.apply(args[0],[...params,...args2])
    }
}

const useMyBind = printname.myBind(obj,"cbe")
useMyBind("TamilNadu","ind")

