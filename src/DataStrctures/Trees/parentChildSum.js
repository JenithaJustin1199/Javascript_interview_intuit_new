class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function replaceWithSum(node) {
  if (node == null) {
    return 0;
  }
  let leftSum = replaceWithSum(node.left);
  let rightSum = replaceWithSum(node.right);
  let sum = node.val + leftSum + rightSum;
  node.val = leftSum + rightSum;
  return sum;
}

function buildBinaryTree() {
  let root = new Node(5);
  let leftChild = new Node(3);
  let rightChild = new Node(7);
  let leftGrandChild1 = new Node(4);
  let rightGrandChild1 = new Node(0);
  let leftGrandChild2 = new Node(2);
  let rightGrandChild2 = new Node(5);

  root.left = leftChild;
  root.right = rightChild;
  leftChild.left = leftGrandChild1;
  leftChild.right = rightGrandChild1;
  rightChild.left = leftGrandChild2;
  rightChild.right = rightGrandChild2;

  return root;
}

function printBinaryTree(root) {
  if (root == null) {
    return;
  }
  console.log(root.val);
  printBinaryTree(root.left);
  printBinaryTree(root.right);
}

let root = buildBinaryTree();
replaceWithSum(root);
printBinaryTree(root);
