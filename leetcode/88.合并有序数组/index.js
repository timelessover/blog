/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // 设置两个数组的指针
    let p1 = m - 1
    let p2 = n - 1
    // 设置 m1 指针
    let p = m + n - 1
    if ((p1 < 0) && (p2 >= 0)) {
        return nums2
    }
    if ((p1 >= 0) && (p2 < 0)) {
        return nums1
    }
    // 双指针，从后往前
    while ((p1 >= 0) && (p2 >= 0)) {
        nums1[p--] = (nums1[p1] < nums2[p2]) ? nums2[p2--] : nums1[p1--];
    }

    return nums1
};

