class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function printRightView(root) {
  if (!root) return [];

  let queue = [root];
  let result = [];

  while (queue.length > 0) {
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();

      if (i === levelSize - 1) {
        result.push(currentNode.value);
      }

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  return result;
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.right = new Node(5);
root.right.right = new Node(7);
root.right.right.left = new Node(8);

console.log(printRightView(root));