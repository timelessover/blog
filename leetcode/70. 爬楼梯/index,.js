/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let tem = 0 ;
    let preWay = 0;
    let curWay = 0;
    for(let i =0;i<n;i++){
        if(i===0){
            preWay = 1
            curWay = 1
        }else{
            tem = preWay
            preWay = curWay
            curWay += tem 
        }
    }  
    return curWay
};