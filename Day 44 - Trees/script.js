class TreeNode {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
      this.root = null;
  }

  // Insert a value into the BST
  insert(value) {
      const newNode = new TreeNode(value);
      if (this.root === null) {
          this.root = newNode;
      } else {
          this._insertRecursive(this.root, newNode);
      }
  }

  _insertRecursive(node, newNode) {
      if (newNode.value < node.value) {
          if (node.left === null) {
              node.left = newNode;
          } else {
              this._insertRecursive(node.left, newNode);
          }
      } else {
          if (node.right === null) {
              node.right = newNode;
          } else {
              this._insertRecursive(node.right, newNode);
          }
      }
  }

  // Remove a value from the BST
  remove(value) {
      this.root = this._removeRecursive(this.root, value);
  }

  _removeRecursive(node, value) {
      if (node === null) return null;

      if (value < node.value) {
          node.left = this._removeRecursive(node.left, value);
      } else if (value > node.value) {
          node.right = this._removeRecursive(node.right, value);
      } else {
          if (node.left === null) return node.right;
          if (node.right === null) return node.left;

          let minLargerNode = this._findMin(node.right);
          node.value = minLargerNode.value;
          node.right = this._removeRecursive(node.right, minLargerNode.value);
      }
      return node;
  }

  _findMin(node) {
      while (node.left !== null) {
          node = node.left;
      }
      return node;
  }

  // Search for a value in the BST
  search(value) {
      return this._searchRecursive(this.root, value);
  }

  _searchRecursive(node, value) {
      if (node === null) return false;
      if (node.value === value) return true;
      if (value < node.value) return this._searchRecursive(node.left, value);
      return this._searchRecursive(node.right, value);
  }

  // Traverse the BST in-order (sorted order)
  traverse() {
      const result = [];
      this._traverseInOrder(this.root, result);
      return result.join(',');
  }

  _traverseInOrder(node, result) {
      if (node === null) return;
      this._traverseInOrder(node.left, result);
      result.push(node.value);
      this._traverseInOrder(node.right, result);
  }

  // Find the minimum value in the BST
  min() {
      const minNode = this._findMin(this.root);
      return minNode ? minNode.value : null;
  }

  // Find the maximum value in the BST
  max() {
      let node = this.root;
      while (node && node.right !== null) {
          node = node.right;
      }
      return node ? node.value : null;
  }
}

// Example usage
const bst = new BinarySearchTree();

// Inserting values
bst.insert(10);
bst.insert(20);
bst.insert(30);
bst.insert(40);
bst.insert(9);
bst.insert(2);
bst.insert(10);
bst.insert(2.5);
bst.insert(3);

// Search operations
console.log(bst.search(10)); // true
console.log(bst.search(5));  // false

// Traverse BST
console.log(bst.traverse()); // 2,2.5,3,9,10,10,20,30,40

// Remove a value
bst.remove(2);
console.log(bst.traverse()); // 3,9,10,10,20,30,40

// Find minimum and maximum
console.log(bst.min()); // 3
console.log(bst.max()); // 40
