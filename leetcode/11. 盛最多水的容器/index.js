/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// 主要思想依然是dp
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    // 这里长度要减一
    let i = 0, j = height.length - 1, res = 0
    // 总体积 height 取决于最短的木板
    while (i < j) {
        res = height[i] < height[j] ?
            Math.max(res, (j - i) * height[i++]) :
            Math.max(res, (j - i) * height[j--]);
    }
    return res;
};

