function numIsIsland(grid) {
  if (!grid || grid.length == 0) {
    return 0;
  }
  let count = 0;
  //let maxArea =0
  let rows = grid.length;
  let cols = grid[0].length;
  console.log(rows, cols);
  function dfs(grid, i, j) {
    if (i >= rows || j >= cols || i < 0 || j < 0 || grid[i][j] === "0") {
      return;
    }
    grid[i][j] = "0";
    //let area=1
    //area+=dfs(grid, i + 1, j);
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
    //return area
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] == "1") {
        count++;
        dfs(grid, i, j);
        //let area = dfs(grid,i,j)
        //maxArea = Math.max(maxArea,area)
      }
    }
  }
  return count;
}
console.log(
  numIsIsland([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
  ])
);
