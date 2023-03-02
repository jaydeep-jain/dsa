// let arr = [4,2,5,0,9,1]

// let l = 0
// let r = arr.length-1

function mergeSort(arr,l,r){
    if(l>=r) return arr
    let m = Math.floor(l+(r-l)/2)
 
    return (mergeSort(arr,l,m), mergeSort(arr,m+1,r),merge(arr,l,m,r))
 }
 
 function merge (arr,l,m,r){
    var n1 = (m-l+1)
    var n2 = (r-m)
  //arr= [4,2,5,0,9,1]
    let leftArray = new Array(n1)
    let rightArray = new Array (n2)
 
    for(var i = 0 ;i<n1;i++){
       leftArray[i]=arr[l+i]
    }//[4,2,5]

    for(var j= 0 ;j<n2;j++){
       rightArray[j]=arr[m+1+j]
    }//[0,9,1]
    var i = 0
    var j= 0
    var k = l
    while(i<n1 && j<n2){
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
 
    while(i<n1){
          arr[k]=leftArray[i]
          i++
          k++
    }
    while(j<n2){
          arr[k]= rightArray[j]
          j++
          k++
    } return arr
 }  
 
 let arr = [4,2,5,0,9,1]
 let l = 0
 let r = arr.length-1
console.log(mergeSort(arr,l,r))
 //console.log(mergeSort(arr,l,r))
//  console.log("before mergeSort --> "+arr);
//  mergeSort(arr,l,r)
//  console.log("after mergeSort --> "+arr)
 