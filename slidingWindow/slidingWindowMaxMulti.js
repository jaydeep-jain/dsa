let arr = [3,4,6,3,7]

let n = arr.length //5
let k = 2 // sliding in pair of 2 index

console.log(multiWindow(arr,k,n))

function multiWindow(arr,k,n){
   let currMulti = 1
   let maxMulti = 1 

   for(let i = 0 ; i<2;i++){
    currMulti*= arr[i]
   }
   maxMulti = currMulti
   
   for(let i = k; i<n;i++){
    currMulti*= arr[i]
    currMulti/= arr[i-k]
    maxMulti = Math.max(currMulti,maxMulti)

   }
   return maxMulti
}
