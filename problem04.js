class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function detectLoop(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

let head = new Node(20);
head.next = new Node(4);
head.next.next = new Node(15);
head.next.next.next = new Node(10);
head.next.next.next.next = head;

if (detectLoop(head)) {
  console.log("Loop found");
} else {
  console.log("No Loop");
}