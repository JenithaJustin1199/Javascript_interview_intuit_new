document.querySelector("#grandparent")
.addEventListener("click",function(){
console.log("grandparent is clicked")
})

document.querySelector("#parent")
.addEventListener("click",function(e){
console.log("parent is clicked")
e.stopPropagation() // stops the further propogation
},true)

document.querySelector("#child")
.addEventListener("click",function(){
console.log("child is clicked")
},true)
