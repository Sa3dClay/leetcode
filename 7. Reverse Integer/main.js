/**
 * @param {number} num
 * @return {number}
 */
var reverse = function (
    num,
    minRange = Math.pow(-2, 31),
    maxRange = Math.pow(2, 31) - 1
) {
    let revNum = 0,
        lastDigit = 0;

    while (num !== 0) {
        lastDigit = num % 10;
        num = parseInt(num / 10);
        revNum = revNum * 10 + lastDigit;
        if (revNum < minRange || revNum > maxRange) return 0;
    }

    return revNum;
};
