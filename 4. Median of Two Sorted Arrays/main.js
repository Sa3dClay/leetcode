/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
    const arr = nums1.concat(nums2).sort((a, b) => a - b);

    if (arr.length % 2 === 0)
        return (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
    else return arr[Math.floor(arr.length / 2)];
};
