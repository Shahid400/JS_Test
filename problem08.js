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
console.log(countSubarrays(array, sum));