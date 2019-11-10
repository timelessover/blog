/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0
    let i = 0
    while (i < prices.length) {
        if (prices[i + 1] > prices[i]) {
            profit += prices[i + 1] - prices[i]
        }
        i++
    }
    return profit
};