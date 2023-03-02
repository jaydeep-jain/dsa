
var topKFrequent = function(nums, k) {
    let counts = new Map();
    let buckets = [];
    for (let i = 0; i <= nums.length; i++)
        buckets.push([]);
    
    // count frequent of the elements
    for (let num of nums) {
        if (counts.has(num)) {
            counts.set(num, counts.get(num) + 1);
        } else {
            counts.set(num, 1);
        }
    } 
    // put them into buckets by frequent
    for (let [key, value] of counts) {
        console.log([key, value])
        console.log(value)
        buckets[value].push(key);
        
    }
    console.log(buckets)
    // fetch the larget frequest bucket first, until reach k
    let ans = [];
    for (let i = buckets.length - 1; i > 0 && ans.length < k; i--) {
        console.log(buckets[i])
        if (buckets[i] !== null) ans.push(...buckets[i]);
    }
    console.log(ans)
    return ans;
};
let nums =[1,3,5,1,0,0,0]
let k = 2
console.log(topKFrequent(nums,k))