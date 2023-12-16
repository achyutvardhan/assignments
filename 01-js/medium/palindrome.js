/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if(str.length==1)return true;
  str = str.toLowerCase.split(' ').join('');
  console.log(str);
  let low =0 ;
  let high = str.length;
  while(low<=high)
  {
    if(str.charAt(low)!=str.charAt(high))return false;
    low++;
    high--;
  }
  return true;
}

module.exports = isPalindrome;
