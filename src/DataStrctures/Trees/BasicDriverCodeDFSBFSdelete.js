export class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
export class BinarysearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insertNode(root, newNode) {
    if (root.value < newNode.value) {
      if (root.right == null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    } else {
      if (root.left == null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    }
  }
  insert(value) {
    let newNode = new TreeNode(value);
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  search(root, value) {
    if (!root) return false;
    else if (root.value === value) {
      return true;
    } else if (value < root.value) {
      this.search(root.left, value);
    } else if (value > root.value) {
      this.search(root.right, value);
    }
    return false;
  }
  getMinNode(root) {
    if (!root.left) return root;
    // for DeleteNode(root.value)
    else return this.getMinNode(root.left);
  }
  getMaxNode(root) {
    if (!root.right) return root.value;
    else return this.getMaxNode(root.right);
  }
  deleteNode(root, value) {
    if (root === null) return null;
    if (root.value === value) {
      if (root.left === null) {
        return root.right;
      }
      if (root.right === null) {
        return root.left;
      }
      let minNode = this.getMinNode(root.right);
      root.right = this.deleteNode(root.right, minNode.value);
      minNode.left = root.left;
      minNode.right = root.right;
      root = minNode;
    }
    if (root.value < value) {
      root.right = this.deleteNode(root.right, value);
    } else if (root.value > value) {
      root.left = this.deleteNode(root.left, value);
    }
    return root;
  }
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  levelOrder() {
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let currentValue = queue.shift();
      console.log(currentValue.value);
      if (currentValue.left) {
        queue.push(currentValue.left);
      }
      if (currentValue.right) {
        queue.push(currentValue.right);
      }
    }
  }
  height(root) {
    if (root == null) {
      return 0;
    }
    return Math.max(this.height(root.left), this.height(root.right)) + 1;
  }
  diameter(root) {
    if (root == null) {
      return 0;
    }
    let leftHeight = this.height(root.left);
    let rightHeight = this.height(root.right);
    let leftDiameter = this.diameter(root.left);
    let rightDiameter = this.diameter(root.right);
    return Math.max(
      leftHeight + rightHeight + 1,
      Math.max(leftDiameter, rightDiameter)
    );
  }
  isBst(root) {
    if (!root) return false;
    if (root.left && root.right.value >= root.value) {
      return true;
    }
    if (root.right && root.right.value <= root.value) return true;
    return this.isBst(root.left) && this.isBSt(root.right);
  }
}

const treeDriver = new BinarysearchTree();
treeDriver.insert(10);
treeDriver.insert(7);
treeDriver.insert(11);
treeDriver.insert(1);
//console.log(treeDriver.search(treeDriver.root,0))
// treeDriver.deleteNode(treeDriver.root, 11);
// treeDriver.insert(11);
// treeDriver.insert(16);
// treeDriver.deleteNode(treeDriver.root, 10);
//treeDriver.preOrder(treeDriver.root);

//console.log(treeDriver.replaceWithSum(treeDriver.root));
treeDriver.preOrder(treeDriver.root);
console.log(treeDriver.isBst(treeDriver.root));
