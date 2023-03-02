// frequency counter method for less time complexity to check is arr elment square present in another array or not 

function same (arr1,arr2){
    if(arr1.length !== arr2.length) return false;

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let val of arr1){
        frequencyCounter1[val]= (frequencyCounter1[val] || 0)+1// using bracket notation to put the value if any repeat it will increase frequency of value
        console.log(frequencyCounter1)
        // console.log(frequencyCounter1[val])
    }
    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val]|| 0)+1
      // console.log(frequencyCounter2)
       // console.log(frequencyCounter2[val])
    } 
    for(let key in frequencyCounter1){
      //  console.log(key)
        if(!(key**2 in frequencyCounter2)){
            
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){ // here we are using 
        //object notation se isse hamari kya value nikal aayegi ki kya value hai

        
        return false
        }
    }
    return true
}

let arr1 = [ 1,2,4,4]
let arr2 = [ 16,1,4,16]
let result = same(arr1,arr2)
console.log(result)
















////brute force method 

// function same (arr1,arr2){
//     if(arr1.lenght !== arr2.lenght){
//         return false
//     }
//     for(let i = 0 ;i<arr1.length ;i++){
//         let correctIndex = arr2.indexOf(arr1[i]**2)
//         if (correctIndex === -1){
//             return false
//         }
//         arr2.splice(correctIndex,1)
//     }
//     return true
// }
// let arr1 = [ 1,2,4]
// let arr2 = [ 1,4,16]
// let result = same(arr1,arr2)
// console.log(result)