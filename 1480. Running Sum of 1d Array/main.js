/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let oldSum = 0;

    return nums.map((num) => {
        oldSum += num;

        return oldSum;
    });
};
