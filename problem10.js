function findDecodeCount(digits) {
  const n = digits.length;
  const count = new Array(n + 1);
  count[0] = 1;
  count[1] = 1;

  if (digits[0] === '0')
    return 0;

  for (let i = 2; i <= n; i++) {
    count[i] = 0;

    if (digits[i - 1] > '0')
      count[i] = count[i - 1];

    if (digits[i - 2] === '1' || (digits[i - 2] === '2' && digits[i - 1] < '7'))
      count[i] += count[i - 2];
  }

  return count[n];
}

const digits = '1234';
const count = findDecodeCount(digits);
console.log(count);
