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
console.log(findLongestString(s, k));