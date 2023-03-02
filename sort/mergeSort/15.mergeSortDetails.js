// javaScript program for merge sort

// mergers two subArrays of arr[]
// first subArray is arr[l..m]
// second subArray is arr[m+1..r]
function merge(arr,l,m,r){
    var n1 = m-l+1;
    var n2 = r-m
    // create temp arrays
    var leftArray = new Array(n1)
    var rightArray = new Array(n2)

    // copy data to temp arrys leftArray[] and rightArray []
    for(var i = 0 ;i<n1; i++){
      leftArray[i] = arr[l+i]}

    for(var j = 0 ; j<n2;j++){ 
      rightArray [j]= arr[m+1+j]}

 // Merge the temp arrays back into arr [l..r]

 // initial index of firts subArray
 var i = 0
 // initial index of 2nd subArray
 var j = 0
 // initial index of merge subArray
 let k = l


 while(i<n1 && j<n2){
    if(leftArray[i]<=rightArray[j]){
        arr[k]= leftArray[i]
        i++
    }
    else{
        arr[k]= rightArray[j]
        j++
    }
    k++
 }
 // copy the remaining elements of leftArray[], if there are any
 while(i<n1){
    arr[k]= leftArray[i]
    i++
    k++
 }
 // copy the remaining elements of rightArray[], if there are any

 while(j<n2){
    arr[k]= rightArray[j]
    j++
    k++
 }
}
// l is for left index and r is
// right index of the sub-array 
// of arr to sorted 

function mergeSort(arr,l,r){ //mergeSort(arr,0,arr_size-1)
    if(l>=r){
        return // returns recursively
    }
    var m = Math.floor(l+(r-l)/2)
    mergeSort(arr,l,m)
    mergeSort(arr,m+1,r)
    merge(arr,l,m,r)
}

var arr = [12,11,13,5,6,7];
var l = 0
var r = arr.length-1
mergeSort(arr,l,r)
console.log(arr)