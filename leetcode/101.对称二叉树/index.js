var isSymmetric = function(root){
    if(!root) return true
    var _isSymmetric = function(t1,t2){
        if(t1 === null && t2 !== null || t1 !== null && t2 === null) return false
        if(t1 === null && t2 === null) return true
        if(t1.val !== t2.val) return false
        return _isSymmetric(t1.left,t2.right) && _isSymmetric(t2.left,t1.right)
    }
    return _isSymmetric(root.left,root.right)
}
