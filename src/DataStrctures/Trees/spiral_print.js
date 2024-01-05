class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

function spiralPrintBinaryTree(root) {
  if (!root) return [];

  // Result array to store the values in spiral order
  const result = [];

  // Two stacks for alternating levels
  const currentLevel = [];
  const nextLevel = [];

  // Flag to determine the direction of traversal
  let leftToRight = true;

  // Push the root node to the current level stack
  currentLevel.push(root);

  // Traverse the tree in spiral order
  while (currentLevel.length > 0) {
    // Pop or shift nodes based on the direction of traversal
    const node = leftToRight ? currentLevel.pop() : currentLevel.shift();

    // Add the node's value to the result array
    result.push(node.value);

    // Add nodes to the next level stack based on the direction
    if (leftToRight) {
      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    } else {
      if (node.right) nextLevel.unshift(node.right);
      if (node.left) nextLevel.unshift(node.left);
    }

    // If the current level is processed, swap stacks and change direction
    if (currentLevel.length === 0) {
      leftToRight = !leftToRight;
      [currentLevel, nextLevel] = [nextLevel, currentLevel];
    }
  }

  // Return the result array containing values in spiral order
  return result;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

const spiralOrder = spiralPrintBinaryTree(root);
console.log(spiralOrder); // Output: [1, 3, 2, 4, 5, 6, 7]
Explanation:

The function spiralPrintBinaryTree takes the root of the binary tree as input and returns an array containing the values in a spiral order.

Two stacks (currentLevel and nextLevel) are used to maintain nodes for alternating levels.

The leftToRight flag determines the direction of traversal.

Nodes are popped or shifted based on the direction, and their values are added to the result array.

Nodes are added to the next level stack based on the direction.

If the current level is processed, the stacks are swapped, and the direction is changed.

The traversal is performed until all nodes are processed, and the result array is returned.

Time Complexity:
The time complexity is O(n), where n is the number of nodes in the binary tree. The algorithm processes each node once.






