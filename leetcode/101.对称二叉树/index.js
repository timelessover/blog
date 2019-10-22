var isSymmetric = function (root) {
    if (!root) return true
    var Symmetric = function (left, right) {
        if (left == null && right !== null || left !== null && right == null) {
            return false
        }
        if (left == null && right == null) {
            return true
        }
        return left.val == left.right && Symmetric(left.left, right.right) && Symmetric(right.right, left.left)
    }
    return Symmetric(root.left, root.right)
};