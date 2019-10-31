// db

var maxPathSum = function (root) {
    // 记录最大值
    let max = 0;
    // 处理根节点小于0的情况
    if (root.val <= 0) {
        max = root.val
    }
    const dp = (node) => {
        if (node == null) return 0
        let left_value = Math.max(dp(node.left), 0)
        let right_value = Math.max(dp(node.right), 0)
        // 总节点之和
        let price_newpath = node.val + left_value + right_value;
        // 上次对比求出最大值
        max = Math.max(max, price_newpath);
        // 递归获取左右子树的总和
        return node.val + Math.max(left_value, right_value);
    }
    dp(root)
    return max
};