// //  bubbleSort 

// var arr =[1,3,5,2]

// function bubbleSort (arr){
//     var flag = true
//     for(var i = 0 ;i<arr.length;i++){
//         for(var j =0 ;j<(arr.length-i-1);j++){
//             if(arr[j]>arr[j+1]) {
//                 flag = false
//                 var temp = arr[j]
//                 arr[j]= arr[j+1]
//                 arr[j+1] = temp
//             }
           
//         }
//         if(flag == true) break
//     }
    
//     return arr
// }
// console.log(bubbleSort(arr))


//////insertion sort
// var arr = [3,1,2,5,4]

// function insertionSort(arr){
//     for(var i = 1;i<arr.length;i++){ 

//     var nti = arr[i] //1 take 2nd index number for change
//     var j = i-1 // take  a variable which is less than 1 by i or 0

//     while(j>=0 && arr[j]>nti){ // while loop lagao ki j>=0 yaj isliye ki j 
//         //ko ham-- karke bahar nikal dege
//         // next condition hai ki 0 index 1 se bada ho to tabhi chalayege
//         arr[j+1] = arr[j] // ham dono index par 0 index bali value kar dege
//         j = j-1 // j ko 1 kam karege while ki condtion se milayega agar jaruri hua to 
//         // rukega varna loop se bahar ho jayega
//     }
//     arr[j+1] =nti // yaha par ham j k aage bale means 1st index par 0 index bali value dalege 


//     }
//     return arr
// }
// console.log(insertionSort(arr));

// // mergeSort 
// var arr = [5,3,2,4,1]
// var low = 0
// var high = arr.length-1
// console.log(mergeSort(arr,low,high))

// function mergeSort(arr,low,high){
// if(low>=high) return arr
// var mid = Math.floor(low+(high-low)/2)
// return (mergeSort(arr,low,mid),mergeSort(arr,mid+1,high) ,merge(arr,low,mid,high))
// }

// function merge(arr,low,mid,high){
//     var n1 = (mid-low+1)
//     console.log("lengthOf n1 is "+n1)
//     var n2 = (high-mid)
//     console.log("lengthOf n2 is "+n2)
//     var leftArray = new Array(n1)
//     var rightArray = new Array(n2)
//     //[5,3,2,4,1]

//     for(var i = 0;i<n1;i++){
//         leftArray[i] = arr[i+low]
//     }
//    // console.log("LEFT ARR " +leftArray)
//     for(var j = 0;j<n2;j++){
//         rightArray[j] = arr[mid+1+j]
//     }
//   //  console.log("RIGHT ARR " +rightArray)

// //    console.log(leftArray)
// //    console.log(rightArray)
//    var i = 0
//    var j = 0
//    var k = low
//    while(i<n1 && j<n2){
//     if(leftArray[i]<=rightArray[j]){
//         arr[k] = leftArray[i]
//         i++
//     }
//     else {
//         arr[k]= rightArray[j]
//          j++
//         }
//          k++
//    }
//    while(i<n1){
//     arr[k]=leftArray[i]
//     i++
//     k++
//    }
//    while(j<n2){
//     arr[k]=rightArray[j]
//     j++
//     k++
//    }
//   // console.log(arr)
// return arr
// }

// quickSort 

let arr = [3,1,0,5,8,0,11]
console.log(quickSort(arr))

function quickSort(arr){
    if(arr.length<2) return arr
    let pivot = arr[arr.length-1]
    let leftArr =[]
    let rightArr = []

    for(let i = 0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            leftArr.push(arr[i])
        }
        else{
            rightArr.push(arr[i])
        }
    }
    let x = [...quickSort(leftArr),pivot, ...quickSort(rightArr)]
    return x
}