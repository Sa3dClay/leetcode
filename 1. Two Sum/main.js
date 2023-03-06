/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let i = 0,
        j = nums.length - 1,
        temp_arr = [...nums];

    nums.sort((a, b) => a - b);

    while (i < nums.length && j >= 0) {
        let sum = nums[i] + nums[j];

        if (sum === target) break;

        sum > target ? j-- : i++;
    }

    let firstIndex = temp_arr.findIndex((e) => e === nums[i]);
    let secondIndex = temp_arr.findIndex(
        (e, index) => e === nums[j] && index !== firstIndex
    );

    return [firstIndex, secondIndex];
};
