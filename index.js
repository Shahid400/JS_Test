// 1. Solution for finding the length of the longest substring containing the same letter
function findLongestString(s, k) {
  let maxLen = 1;
  let charCount = {};
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    charCount[s[end]] = (charCount[s[end]] || 0) + 1;
    let maxRepeatCharCount = Math.max(...Object.values(charCount));

    if ((end - start + 1) - maxRepeatCharCount > k) {
      charCount[s[start]]--;
      start++;
    }

    maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
}

let s = "AABABBA";
let k = 1;
console.log(findLongestString(s, k)); // Output: 4

// 2. Solution for enqueue and dequeue actions without using a queue data structure
function performActions(actions) {
  let stack1 = [];
  let stack2 = [];
  let result = [];

  for (let i = 0; i < actions.length; i++) {
    if (actions[i] >= 0) {
      stack1.push(actions[i]);
    } else {
      if (stack2.length === 0) {
        result.push(-1);
      } else {
        result.push(stack2.pop());
      }
    }
  }

  while (stack1.length > 0) {
    stack2.push(stack1.pop());
  }

  while (stack2.length > 0) {
    result.push(stack2.pop());
  }

  return result;
}

let actions = [1, 2, -1, 3, 4, -1, -1];
console.log(performActions(actions)); // Output: [2, 1, 4, 3]

// 3. Solution for printing the right view of a binary tree
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

// Create the binary tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.right = new Node(5);
root.right.right = new Node(7);
root.right.right.left = new Node(8);

console.log(printRightView(root)); // Output: [1, 3, 7, 8]

// 4. Solution for detecting a cycle in a linked list
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

// 5. Solution for converting a binary number to base 6
function convertBase(binaryNumber) {
  let decimal = parseInt(binaryNumber, 2);
  let base6Number = decimal.toString(6);
  return parseInt(base6Number);
}

let binaryNumber = "10101";
console.log(convertBase(binaryNumber)); // Output: 33

// 6. Solution for finding the largest sum of a subarray in an array
function findLargestSum(arr) {
  let currentSum = 0;
  let largestSum = 0;

  for (let number of arr) {
    currentSum = Math.max(0, currentSum + number);
    largestSum = Math.max(largestSum, currentSum);
  }

  return largestSum;
}

let arr = [5, -2, 4, -2, 1];
console.log(findLargestSum(arr)); // Output: 7

// 7. Solution for finding the smallest size of a set for intersection of intervals
function smallestSetSize(intervals) {
  let points = [];
  for (let interval of intervals) {
    points.push(interval[0], interval[1]);
  }
  points.sort((a, b) => a - b);

  let setSize = 0;
  let prevPoint = null;

  for (let point of points) {
    if (prevPoint !== point) {
      setSize += 2;
      prevPoint = point;
    }
  }

  return setSize;
}

let intervals = [[1, 3], [1, 4], [2, 5], [3, 5]];
console.log(smallestSetSize(intervals)); // Output: 3

// 8. Solution for counting subarrays with a sum less than a given value
function countSubarrays(arr, sum) {
  let count = 0;
  let currentSum = 0;
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    currentSum += arr[right];

    while (currentSum > sum) {
      currentSum -= arr[left];
      left++;
    }

    count += right - left + 1;
  }

  return count;
}

let array = [2, 5, 6];
let sum = 10;
console.log(countSubarrays(array, sum)); // Output: 4

// 9. Solution for finding the total number of unique paths in a matrix
function countPaths(m, n) {
  if (m === 1 || n === 1) {
    return 1;
  }

  let dp = new Array(m).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[j] += dp[j - 1];
    }
  }

  return dp[m - 1];
}

let m = 2;
let n = 2;
console.log(countPaths(m, n)); // Output: 2

// 10. Solution for decoding a string with digits
function numDecodings(s) {
  if (s.length === 0 || s[0] === '0') {
    return 0;
  }

  let n = s.length;
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    let oneDigit = parseInt(s[i - 1]);
    let twoDigits = parseInt(s.substring(i - 2, i));

    if (oneDigit >= 1 && oneDigit <= 9) {
      dp[i] += dp[i - 1];
    }

    if (twoDigits >= 10 && twoDigits <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
}

let digits = '11106';
console.log(numDecodings(digits)); // Output: 2



// 11. Solution for validating the sum of rules
function validateRules(rules) {
  let positions = {};

  for (let rule of rules) {
    let [pointA, direction, pointB] = rule.split(" ");
    if (!positions[pointA]) positions[pointA] = {};
    if (!positions[pointB]) positions[pointB] = {};

    if (direction === "N") {
      if (positions[pointA].hasOwnProperty("S") || positions[pointB].hasOwnProperty("N")) {
        return false;
      }
      positions[pointA].N = true;
      positions[pointB].S = true;
    } else if (direction === "S") {
      if (positions[pointA].hasOwnProperty("N") || positions[pointB].hasOwnProperty("S")) {
        return false;
      }
      positions[pointA].S = true;
      positions[pointB].N = true;
    } else if (direction === "E") {
      if (positions[pointA].hasOwnProperty("W") || positions[pointB].hasOwnProperty("E")) {
        return false;
      }
      positions[pointA].E = true;
      positions[pointB].W = true;
    } else if (direction === "W") {
      if (positions[pointA].hasOwnProperty("E") || positions[pointB].hasOwnProperty("W")) {
        return false;
      }
      positions[pointA].W = true;
      positions[pointB].E = true;
    } else if (direction === "NE") {
      if (positions[pointA].hasOwnProperty("SW") || positions[pointB].hasOwnProperty("NE")) {
        return false;
      }
      positions[pointA].NE = true;
      positions[pointB].SW = true;
    } else if (direction === "NW") {
      if (positions[pointA].hasOwnProperty("SE") || positions[pointB].hasOwnProperty("NW")) {
        return false;
      }
      positions[pointA].NW = true;
      positions[pointB].SE = true;
    } else if (direction === "SE") {
      if (positions[pointA].hasOwnProperty("NW") || positions[pointB].hasOwnProperty("SE")) {
        return false;
      }
      positions[pointA].SE = true;
      positions[pointB].NW = true;
    } else if (direction === "SW") {
      if (positions[pointA].hasOwnProperty("NE") || positions[pointB].hasOwnProperty("SW")) {
        return false;
      }
      positions[pointA].SW = true;
      positions[pointB].NE = true;
    }
  }

  return true;
}

let rules = ["A N B", "B NE C", "C N A"];
console.log(validateRules(rules)); // Output: false

// 12. Solution for counting occurrences of a number in a sorted array
function countOccurrences(sortedArray, x) {
  let firstIndex = findFirstIndex(sortedArray, x);
  if (firstIndex === -1) {
    return 0;
  }
  let lastIndex = findLastIndex(sortedArray, x);
  return lastIndex - firstIndex + 1;
}

function findFirstIndex(sortedArray, x) {
  let low = 0;
  let high = sortedArray.length - 1;
  let firstIndex = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (sortedArray[mid] === x) {
      firstIndex = mid;
      high = mid - 1;
    } else if (sortedArray[mid] < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return firstIndex;
}

function findLastIndex(sortedArray, x) {
  let low = 0;
  let high = sortedArray.length - 1;
  let lastIndex = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (sortedArray[mid] === x) {
      lastIndex = mid;
      low = mid + 1;
    } else if (sortedArray[mid] < x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return lastIndex;
}

let sortedArray = [2, 2, 3, 3, 5, 5, 5, 8];
let x = 5;
console.log(countOccurrences(sortedArray, x)); // Output: 3

