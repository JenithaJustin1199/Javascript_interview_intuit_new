// 5

//3   7

//4 0   2  5

//  21

// 4  7

// 0   0  0

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  setRoot(treeNode) {
    this.root = treeNode;
  }

  dfsSum(rootNode) {
    if (!rootNode) {
      return 0;
    }
    console.log(rootNode.data);

    return (
      rootNode.value + this.dfsSum(rootNode.left) + this.dfsSum(rootNode.right)
    );
  }
}

let rootNode = new TreeNode(5);
// console.log(rootNode)

let node1 = new TreeNode(3);
let node2 = new TreeNode(7);
let node3 = new TreeNode(4);
let node4 = new TreeNode(2);
let node5 = new TreeNode(5);

let tree = new Tree();
tree.setRoot(rootNode);

// console.log(tree.root)  // 5

tree.root.left = node1; //3
tree.root.right = node2; //7
node1.left = node3; //4
node2.left = node4;
node2.right = node5;

tree.dfsSum(rootNode);

// console.log(node2);

// console.log(rootNode);
