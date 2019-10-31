/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let max = 0
    let lens = prices.length
    let j = 0
    for (let i = 0; i < lens; i++) {
        if (prices[i] < prices[j]) {
            // j记录最小的值
            j = i 
        } else {
            // 保持所有的值与最小的值比较，对比出最大值
            max = Math.max(prices[i] - prices[j], max)
        }
    }
    return max
};