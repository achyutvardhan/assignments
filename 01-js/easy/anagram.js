/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1= str1.toLowerCase();
  str2 = str2.toLowerCase();
  const newStr1 = str1
    .split("")
    .sort()
    .join("");
  const newStr2 = str2
    .split("")
    .sort()
    .join("");
    console.log(newStr1);
    console.log(newStr2);
  if (newStr1.length !== newStr2.length) return false;
  for (let i = 0; i < newStr1.length; i++) {
    if (newStr1[i] != newStr2[i]) return false;
  }
  return true;
}

module.exports = isAnagram;
