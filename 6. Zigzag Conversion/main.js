/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
    if (numRows <= 1) return s;

    let zigzagS = "";
    let jump = (numRows - 1) * 2;

    for (let r = 0; r < numRows; r++) {
        for (let i = r; i < s.length; i += jump) {
            zigzagS += s[i];

            if (r > 0 && r < numRows - 1) {
                let smallJump = jump - 2 * r;

                if (i + smallJump < s.length) {
                    zigzagS += s[i + smallJump];
                }
            }
        }
    }

    return zigzagS;
};
