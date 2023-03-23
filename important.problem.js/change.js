var input = [10, 0, 90, 89, 1, 0, 17, 0, 10, 1, 23, 22, 23, 70]

// output = {  
// 0: 7, 
// 1: 5, 
// 2: 4, 
// 3: 2, 
// 7: 2, 
// 8: 1, 
// 9: 2
// }
//  const freqMap = new Map();
//     nums.forEach(num => freqMap.set(num, (freqMap.get(num) || 0) + 1));
  
//     const freqArr = Array.from(freqMap.entries());
//     console.log(freqArr)
//     freqArr.sort((a, b) => b[1] - a[1]);
//     console.log(freqArr)
  

let join = input.join("")
let splitEach = join.split("")

var numberArray = splitEach.map(Number);
  
  let map = new Map()
  
  numberArray.forEach(num=>map.set(num,(map.get(num)||0)+1))
  
//   let arr = Array.from(map.entries())
//   console.log(arr)
//   let sort = arr.sort((a,b)=>a[0]-b[0])
  
//   console.log(sort)
//   console.log(map)
// // Print the array of numbers
// console.log(numberArray);
const sortedAsc = new Map([...map].sort());

// 👇️ {'a' => 'one', 'b' => 'two', 'z' => 'three'}
console.log(sortedAsc);



//console.log(y)