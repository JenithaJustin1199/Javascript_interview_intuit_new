Approach:

Perform an inorder traversal of the binary tree.
Check whether the resulting sequence is sorted. If it is, the tree is a BST.
Code with Comments:

python
Copy code
class TreeNode:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

def isBSTUtil(root, prev):
    # Base case: an empty tree is a BST
    if root is None:
        return True

    # Check the left subtree
    if not isBSTUtil(root.left, prev):
        return False

    # Check the current node's value
    if root.val <= prev[0]:
        return False

    # Update the previous value to the current node's value
    prev[0] = root.val

    # Check the right subtree
    return isBSTUtil(root.right, prev)

def isBST(root):
    # Use a list to pass prev by reference
    prev = [float('-inf')]
    return isBSTUtil(root, prev)

# Example usage:
# Constructing a sample binary tree
root = TreeNode(2)
root.left = TreeNode(1)
root.right = TreeNode(3)

# Check if the binary tree is a BST
result = isBST(root)
print(result)  # Output: True
In this example, the isBST function checks if the given binary tree is a Binary Search Tree by calling the isBSTUtil function, which performs an inorder traversal and checks whether the values are in sorted order.

Time Complexity:

The time complexity of this approach is O(n), where n is the number of nodes in the binary tree. The algorithm needs to visit each node once during the inorder traversal to check the ordering.
