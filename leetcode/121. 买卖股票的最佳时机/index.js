/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // 最高峰
    let max = 0
    // 最低峰
    let min = 0
    let lens = prices.length
    for (let i = 0; i < lens; i++) {
        let diff = prices[i] - prices[min]
        if (diff<0) {
            min = i
        } else {
            // 保持所有的值与最小的值比较，对比出最大值
            max = Math.max(diff, max)
        }
    }
    return max
};