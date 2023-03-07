/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length === 1) return 1;

    let cMap = new Map(),
        maxLength = 0,
        length = 0;

    for (let i = 0; i < s.length; i++) {
        let existIndex = cMap.get(s[i]);

        if (existIndex) {
            length = 0;
            cMap.clear();
            i = existIndex;
        }

        cMap.set(s[i], i + 1);
        length++;

        if (length > maxLength) maxLength = length;
    }

    return maxLength;
};
