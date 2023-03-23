function topKFrequent(nums, k) {
    const freqMap = new Map();
    nums.forEach(num => freqMap.set(num, (freqMap.get(num) || 0) + 1));
  
    const freqArr = Array.from(freqMap.entries());
    console.log(freqArr)
    freqArr.sort((a, b) => b[1] - a[1]);
    console.log(freqArr)
  
    const result = [];
    for (let i = 0; i < k; i++) {
      result.push(freqArr[i][0]);
    }
  
    return result;
  }
  
  const nums = [1, 1, 1, 2, 2, 3,4,4,4];
  const k = 2;
  console.log(topKFrequent(nums, k)); // Output: [1, 2]
  
