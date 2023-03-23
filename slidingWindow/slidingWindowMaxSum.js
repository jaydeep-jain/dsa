let arr = [100,200,300,400]
let k =2
let n= 4

console.log(window(k,arr,n))

function window(k,arr,n){
  let currsum = 0
  let maxsum = 0
for(let i = 0 ;i<k;i++){

currsum += arr[i]

}

maxsum = currsum
for(let i=k;i<n;i++){
   currsum+= arr[i]
   currsum-= arr[i-k]
   maxsum = Math.max(maxsum,currsum)
}
return maxsum
}

//TC - O(n)
//sc- O(1)