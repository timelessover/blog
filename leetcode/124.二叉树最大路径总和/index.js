var maxPathSum = function (root) {
    if (root == null) return 0;
    // 记录最大值
    let max = 0
    // 从第一个开始递归
    dp(root)
    function dp(root) {
        // 左右树的最长路径总和
        let leftval = dp(root.left);
        let rightval = dp(root.right);
        let currentMax = root.val;
        if (leftval > 0) {
            currentMax += leftval;
        }
        if (rightval > 0) {
            currentMax += rightval;
        }
        if (currentMax > max) {
            max = currentMax;  // 更新全局最大值
        }

        return Math.max(root.val, Math.max(leftval + root.val, rightval + root.val)); // 返回经过root为根节点的最大路径值
    }
};