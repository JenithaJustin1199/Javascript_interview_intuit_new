import { BinarysearchTree } from "./BasicDriverCodeDFS";

function deleteNode(root, value) {
  if (root === null) return null;
  if (root.value === value) {
    if (root.left === null) {
      return root.right;
    }
    if (root.right === null) {
      return root.left;
    }
    let minNode = this.getMinNode(root.right);
    root.right = deleteNode(root.right, minNode);
    minNode.left = root.left;
    minNode.right = root.right;
    root = minNode;
  }
  if (root.value < value) {
    root.right = deleteNode(root.right, value);
  } else if (root.value > value) {
    root.left = deleteNode(root.left, value);
  }
  return root;
}

//Remove a node which have 1, 2 , 0 child
