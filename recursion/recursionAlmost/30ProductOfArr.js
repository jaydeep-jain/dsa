let arr = [ 2,3,5,8,1]

function productOfArray(arr){

    if(arr.length == 0) return 1
    return arr[0]* productOfArray(arr.slice(1))

}

console.log(productOfArray(arr));



