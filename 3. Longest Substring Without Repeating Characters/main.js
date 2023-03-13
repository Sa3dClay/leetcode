/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let start = 0,
        end = 0;
    let sSet = new Set();
    let maxLength = 0;

    while (end < s.length) {
        if (!sSet.has(s[end])) {
            sSet.add(s[end]);
            maxLength = Math.max(maxLength, sSet.size);
            end++;
        } else {
            sSet.delete(s[start]);
            start++;
        }
    }

    return maxLength;
};
