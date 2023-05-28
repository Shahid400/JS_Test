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
console.log(countOccurrences(sortedArray, x));