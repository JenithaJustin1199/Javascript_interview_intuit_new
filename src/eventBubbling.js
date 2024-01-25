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


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event Bubbling Example</title>
</head>
<body>

<div id="outer" style="padding: 20px; border: 2px solid red;">
  <p id="inner" style="padding: 20px; border: 2px solid blue;">Click me!</p>
</div>

<script>
  // JavaScript code for event handling
  document.getElementById('outer').addEventListener('click', function (event) {
    console.log('Outer div clicked!');
    console.log('Target:', event.target);
    console.log('Current Target:', event.currentTarget);
  });

  document.getElementById('inner').addEventListener('click', function (event) {
    console.log('Inner paragraph clicked!');
    console.log('Target:', event.target);
    console.log('Current Target:', event.currentTarget);
  });
</script>

</body>
</html>
