/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  x = x.toString();

  let isPalindrome = true;
  let start = 0,
    end = x.length - 1;

  while (end > start) {
    if (x[end] !== x[start]) {
      isPalindrome = false;

      break;
    }

    start++;
    end--;
  }

  return isPalindrome;
};
