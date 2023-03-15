let arr = [5, 9, 2, 0, 1, 9,8]

function secondBig(arr){
    let max = Math.max(...arr)
    let n = Number.MAX_VALUE
    let x =0
    
    for(let i = 0;i<arr.length;i++){

        if(!(max-arr[i]==0)){
        if(max-arr[i]<n){
            n = max-arr[i]
            x = arr[i]
        }
        
        }
    }
    return x
}
console.log(secondBig(arr))