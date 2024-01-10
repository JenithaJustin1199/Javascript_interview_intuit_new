There are several ways to vertically and horizontally center a div element in CSS and JavaScript. I'll provide examples for both methods.

Method 1: Using Flexbox (CSS)
html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }

    .centered-div {
      text-align: center;
    }
  </style>
  <title>Centered Div with Flexbox</title>
</head>
<body>
  <div class="centered-div">
    <h1>Your Content Here</h1>
    <p>Additional content can go here.</p>
  </div>
</body>
</html>
Method 2: Using Grid (CSS)
html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      display: grid;
      place-items: center;
      height: 100vh;
      margin: 0;
    }

    .centered-div {
      text-align: center;
    }
  </style>
  <title>Centered Div with Grid</title>
</head>
<body>
  <div class="centered-div">
    <h1>Your Content Here</h1>
    <p>Additional content can go here.</p>
  </div>
</body>
</html>
Method 3: Using JavaScript
html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      height: 100vh;
      margin: 0;
      position: relative;
    }

    .centered-div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
  </style>
  <title>Centered Div with JavaScript</title>
</head>
<body>
  <div class="centered-div">
    <h1>Your Content Here</h1>
    <p>Additional content can go here.</p>
  </div>
</body>
</html>
