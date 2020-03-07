var lengthOfLongestSubstring = function (s) {
    let lens = s.length, max = 0;
    let map = new Map()
    for(let j=0,i=0;j<lens;j++){
      // 如果在[i,j]区间存在重复值，直接越过该区间，变为[j,j+1]
      if(map.has(s.charAt(j))){
        i = Math.max(map.get(s.charAt(j)),i)
      }
      max = Math.max(max,j-i+1)
      map.set(s.charAt(j),j+1)
    }
    return max
  };