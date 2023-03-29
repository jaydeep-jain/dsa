// // function x(){
// // console.log(1," next will take 4 after this")

// // setInterval(() => {
// //     console.log(3)
    
// // }, 3000);
// // // }
// // // x()

// function x(){
//     for(let i =1;i<=5;i++){
//     setTimeout(function(){
//     console.log(i)},i*5000)
//     }
//     }
// x()

// function isPrime(n){

//     for(let i = 2;i<Math.sqrt(n);i++){
//         if(n%i===0){
//             return false
//         }
//     }
//     return true
// }

// let x =isPrime(n)
// console.log(x)


let arr = [10,2,3,8,11,16,8,0,9]
let low = 0
let high = arr.length-1
console.log(mergeSort(arr,low,high))

function mergeSort(arr,low,high){
    if(low>=high) return arr
    let mid = Math.floor (low+(high-low)/2)
    return (mergeSort(arr,low,mid) ,mergeSort(arr,mid+1,high),merge(arr,low,mid,high))
}

function merge(arr,low,mid,high){
    let n1 = (mid-low+1)
    let n2 = (high-mid)

    let leftArr = new Array(n1)
    let rightArr = new Array(n2)
    
    for(let i =0;i<n1;i++){
        leftArr[i] = arr[i+low]
    }
    for(let j = 0;j<n2;j++){
        rightArr[j] = arr[mid+1+j]
    }
   // console.log(leftArr)
  //  console.log(rightArr)
  let i = 0 ,j=0,k = low
  while(i<n1 && j<n2){
    if(leftArr[i]<=rightArr[j]){
        arr[k] = leftArr[i]
        i++
    }
    else{
        arr[k] = rightArr[j]
        j++
    }
    k++
  }
  while(i<n1){
    arr[k] = leftArr[i]
    i++
    k++
  }
  while(j<n2){
    arr[k] = rightArr[j]
    j++
    k++
  }
  return(arr)
}