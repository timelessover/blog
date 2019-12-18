/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let map = new Map()
    map.set(')', '(')
    map.set('}', '{')
    map.set(']', '[')
    const stack = []
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i)

        if (map.has(c)) {
            let topElement = stack.length ? stack.pop() : ''
            if (topElement != map.get(c)) {
                return false;
            }
        } else {
            stack.push(c)
        }
    }
    return !stack.length
};
var isValid = function (str) {
    var map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    let temp = [];
    // 入栈
    for (var cur of str) {
        if (temp.length && cur === map[temp[temp.length - 1]]) {
            temp.pop()
        } else {
            temp.push(cur)
        }
    }
    return !temp.length
};

