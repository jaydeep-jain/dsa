
let str = "yes we will marry in this year"

function cic (arr){
    if(Array.isArray(arr)==false){
        arr= arr.split(" ")
    }
    
    if(arr.length<=1) return arr
   let result = []
    let x = arr[0][0].toUpperCase()+arr[0].slice(1)
    result.push(x)
    return result.join(" ").concat(cic(arr.slice(1)))
}
console.log(cic(str))


