
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event Capturing and Bubbling Example</title>
</head>
<body>

<div id="outer" style="padding: 20px; border: 2px solid red;">
  <p id="inner" style="padding: 20px; border: 2px solid blue;">Click me!</p>
</div>

<script>
  // JavaScript code for event handling
  document.getElementById('outer').addEventListener('click', function (event) {
    console.log('Outer div clicked during the bubbling phase!');
    console.log('Target:', event.target);
    console.log('Current Target:', event.currentTarget);
  }, false); // Setting the third parameter to 'false' enables bubbling (default behavior)

  document.getElementById('inner').addEventListener('click', function (event) {
    console.log('Inner paragraph clicked during the capturing phase!');
    console.log('Target:', event.target);
    console.log('Current Target:', event.currentTarget);
  }, true); // Setting the third parameter to 'true' enables capturing

  // Optional: Add an additional event handler during the capturing phase for the body
  document.body.addEventListener('click', function (event) {
    console.log('Body clicked during the capturing phase!');
    console.log('Target:', event.target);
    console.log('Current Target:', event.currentTarget);
  }, true);
</script>

</body>
</html>
