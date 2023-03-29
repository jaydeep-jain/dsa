// let arr = [4,2,5,0,9,1]

// let l = 0
// let r = arr.length-1

function mergeSort(arr,l,r){
    if(l>=r) return arr   // agar length 0 se kam hui to return kar dege
    let m = Math.floor(l+(r-l)/2) // mid number lege arur arr ko 2 parts me tod dege
 
    return (mergeSort(arr,l,m), mergeSort(arr,m+1,r),merge(arr,l,m,r)) 
    // recursive use karke ref share karege aur arry break karke merge kar lege
 }
 
 function merge (arr,l,m,r){
    var n1 = (m-l+1) // length of left one side
    var n2 = (r-m)  // length of right one side
  //arr= [4,2,5,0,9,1]
    let leftArray = new Array(n1) // make leftArr from leftLength
    let rightArray = new Array (n2)// make rightArr from rightLength
 
    for(var i = 0 ;i<n1;i++){
       leftArray[i]=arr[l+i] // leftArr ko fill karege uski length tak
    }//[4,2,5]

    for(var j= 0 ;j<n2;j++){
       rightArray[j]=arr[m+1+j] // same isko fill karege
    }//[0,9,1]

    // take 3 var 
    var i = 0
    var j= 0
    var k = l
    while(i<n1 && j<n2){ // sortArr compare with elements of eachArr 
       if(leftArray[i]<=rightArray[j]){
          arr[k]=leftArray[i]
          i++
       }
       else{
          arr[k]=rightArray[j]
          j++
       }
       k++
    }
 
    while(i<n1){ // agar kisi ki length bachi hui ho to use bhi bhardo
          arr[k]=leftArray[i]
          i++
          k++
    }
    while(j<n2){ // yaha bhi vahi
          arr[k]= rightArray[j]
          j++
          k++
    } return arr
 }  
 
 let arr = [5,3,2,4,1]
 let l = 0
 let r = arr.length-1
console.log(mergeSort(arr,l,r))
 //console.log(mergeSort(arr,l,r))
//  console.log("before mergeSort --> "+arr);
//  mergeSort(arr,l,r)
//  console.log("after mergeSort --> "+arr)
 