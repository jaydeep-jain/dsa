
// [1,4,[4,9],3] ---->[flattenFunc]--------->[1,4,4,9,3]

function flattenArr(arr){

    let flat = []
    let n = arr.length

    for(var i=0 ;i<n ; i++){
    if(Array.isArray(arr[i])==false)  flat.push(arr[i]) 
    else flat = flat.concat(flattenArr(arr[i]))
   }
   return flat
}
let arr = [1,3,5,[4,9,0],[4,6,1]]
let arr1 = ["a","b",["r","s","t"],"g","h"]
console.log(flattenArr(arr1))