var reverse = function (x) {
    let symbol = x > 0 ? '' : '-'
    let str = x.toString()
    let res = parseInt(symbol + str.split('').reverse().join(''))
    if (Math.pow(2, 31) < res || Math.pow(-2, 31) > res) {
        return 0
    } else {
        return res
    }
};