let arr = [6,3,8,5,9,4]

function bubbleSort(arr){
    let swapping = 0
    for(let i = 0;i<arr.length;i++){
        for(let j=0;j<(arr.length-i-1);j++){
            if(arr[j]>arr[j+1]){
                swapping++
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
           
        }
        if(swapping==0){
            break
        }
        
    } 
    return arr
}
console.log(bubbleSort(arr)) 