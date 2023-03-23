const nums = [1, 1, 1, 2, 2, 3,4,4,4];
const k = 2;

const highestfreq = function (nums,k){

    let map = new Map()

    nums.forEach(num=>map.set(num,(map.get(num)||0)+1))
console.log(map)
let mapEntry = map.entries()

// let arr =[]
// for(let arrr of mapEntry){
//     arr.push(arrr)
// }
// console.log(arr)
// arr.sort((a,b)=>b[1]-a[1])
// console.log(arr)

let arrMap = Array.from(mapEntry)
arrMap.sort((a,b)=>b[1]-a[1])
let result = []
for(let i = 0;i<k;i++){
    result.push(arrMap[i][0])
}

console.log(result)

}
console.log(highestfreq(nums,k))