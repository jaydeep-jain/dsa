// the time complexity here is ----> O(n)
function reverseArr (arr){
    let newArr = []
    for(let i=arr.length-1; i>=0 ; i--){
        newArr.push(arr[i])
    }
    return newArr
}
let arr1 =[4,6,7,2,6,0] 
let result = reverseArr(arr1)
console.log(result) 

//console.log(reverseArr([3,6,2,5,9])) 