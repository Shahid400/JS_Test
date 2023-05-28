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
console.log(findLargestSum(arr));