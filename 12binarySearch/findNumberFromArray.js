// time complexity O(log n)
// let arr= [3,7,11,34,78,92]
// let k = 3
// console.log(ok(arr,k))
// function ok(arr,k){
//     let low =0
//     let high = arr.length-1
//     let mid

//     while(low<=high){
//         mid = Math.floor(low+(high-low)/2)
//         if(arr[mid]==k){
//             return [mid]
//         }
//         else if(arr[mid]>k)
//         {
//             high = mid-1
//         }
//         else{
//             low = mid+1
//         }
// }
// return false
// }
let arr= [3,7,11,34,78,92]
let k = 30
console.log(findNumber(arr,k))

function findNumber(arr,k){

    let low = 0 
    let high = arr.length-1
    
while(low<=high){ 

let mid =Math.floor(low + (high-low)/2)
if(arr[mid]==k)return mid

else if (arr[mid]>k) high = mid-1

else low = mid+1
    }
    return `${k} is not presented anywhere in this [${arr}]`
}