// check arr2 has square of arr1 using brute force method
let arr1 = [ 1,2,3]
let arr2 = [ 1,4,9]
console.log(square(arr1,arr2))

function square (arr1,arr2){
    if(arr1.length !== arr2.length) return false // length same n ho to return 
    for (let i =0;i<arr1.length;i++){
    let corrctIndex = arr2.indexOf(arr1[i]**2)
   // console.log(corrctIndex)
    // arr1 k element ka sqare karke inbuilt- 
    //function (indexOf) se check karya ki arr1 aur arr2 me same element hai ya nahi
     if(corrctIndex === -1)  return false
     //console.log(arr2)
    arr2.splice(corrctIndex,1)
    //console.log(arr2)
}
//console.log(arr2)
return true
}






  