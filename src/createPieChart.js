<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* Step 1: Style the container for the pie chart */
    .pie-chart {
      width: 200px;
      height: 200px;
      background-size: cover; /* Ensure the background covers the entire container */
      border: 1px solid #ddd; /* Add a border for visualization */
      border-radius: 50%; /* Create a circular shape */
    }

    /* Step 2: Style the slider input */
    input {
      margin-top: 10px;
    }
  </style>
  <title>Dynamic Pie Chart with Slider</title>
</head>
<body>
  <!-- Step 3: Header for the page -->
  <h1>Dynamic Pie Chart with Slider</h1>

  <!-- Step 4: Slider input to control the pie chart size -->
  <input
    type="range"
    id="pieSizeSlider"
    min="10"
    max="200"
    value="100"
    step="1"
    oninput="updatePieChart()"
  >

  <!-- Step 5: Container div for the pie chart with a unique ID -->
  <div id="pieChart" class="pie-chart"></div>

  <!-- Step 6: JavaScript code for updating the pie chart dynamically -->
  <script>
    // Step 7: Get references to the HTML elements
    const pieChart = document.getElementById('pieChart');
    const pieSizeSlider = document.getElementById('pieSizeSlider');

    // Step 8: Function to update the pie chart based on the slider value
    function updatePieChart() {
      // Step 9: Get the current percentage value from the slider
      const percentage = pieSizeSlider.value;

      // Step 10: Generate a conic gradient background for the pie chart
      const backgroundImage = generatePieChartBackground(percentage);

      // Step 11: Apply the background to the pie chart container
      pieChart.style.backgroundImage = backgroundImage;
    }

    // Step 12: Function to generate a conic gradient background
    function generatePieChartBackground(percentage) {
      // Step 13: Construct the conic gradient CSS value
      const gradient = `conic-gradient(
        #FF6384 0% ${percentage}%,
        transparent ${percentage}% 100%
      )`;

      // Step 14: Return the generated gradient value
      return gradient;
    }

    // Step 15: Initial update of the pie chart when the page loads
    updatePieChart();
  </script>
</body>
</html>
