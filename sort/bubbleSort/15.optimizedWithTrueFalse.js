let arr = [6,3,8,5,9,4]

function bubbleSort(arr){
    let swapping = false
    for(let i = 0;i<arr.length;i++){
        for(let j=0;j<(arr.length-i-1);j++){
            if(arr[j]>arr[j+1]){
                swapping = true
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
            if(swapping== false){
                break
            }
            
        }
    } 
    return arr
}
console.log(bubbleSort(arr)) 