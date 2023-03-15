let arr = [7,1,3,6,8]

function secondmin(arr){
    let max = Math.max(...arr)
    let n = 0
    let x =0
    
    for(let i = 0;i<arr.length;i++){
        if(!(max-arr[i]==0)){
        if(max-arr[i]>n){
            n = max-arr[i]
            x = arr[i]
        }
        }
    }
    return x
}
console.log(secondmin(arr))