// function rec (i,n){
//     if(i>n)  return 
//   console.log(i)
//     rec(i**,n)

// }


// rec(1,5)

let arr = [3,4,6,3,7]

let k =2
let n = 4

function maxWindow (arr,k,n){
    let currSum = 1
    let maxSum = 1

    currSum = arr[0]*arr[1]
    maxSum = currSum

    for(let i = k;i<n;i++){
     
        currSum*=arr[i]
        currSum/=arr[i-k]
        maxSum = Math.max(maxSum,currSum)
    }

    return maxSum
}

console.log (maxWindow(arr,k,n))