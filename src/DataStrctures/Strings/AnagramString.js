function isStringsAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let charTracker = {};
  for (let i = 0; i < str1.length; i++) {
    charTracker[str1[i]] = (charTracker[str1[i]] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    if (!charTracker[str2[i]]) {
      return false;
    }
    charTracker[str2[i]]--;
  }
  return true;
}
console.log(isStringsAnagram("anagram", "gramana")); //O(n)
