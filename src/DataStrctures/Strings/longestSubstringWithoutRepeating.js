function lengthofLongestSubString(str) {
  let maxLen = 0;
  let left = 0;
  let maxStart = 0;
  let maxEnd = 0;
  let mapper = new Map();
  for (let right = 0; right < str.length; right++) {
    if (mapper.has(str[right]) && mapper.get(str[right]) >= left) {
      left = mapper.get(str[right]) + 1;
    }
    mapper.set(str[right], right);
    maxLen = Math.max(maxLen, right - left + 1);
    if (right - left > maxEnd - maxStart) {
      maxStart = left;
      maxEnd = right;
    }
  }
  return [maxLen, str.substring(maxStart, maxEnd + 1)];
}
console.log(lengthofLongestSubString("abcabcdefghistuefhjjjk"));
