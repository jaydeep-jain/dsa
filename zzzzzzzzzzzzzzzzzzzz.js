// let x = "9"
// let y = Number.isInteger(+x)
// console.log(y)

let arr = [10,11,4,5,7,8,9]

let target = 4 

console.log(findTarget(arr,target))

function findTarget(arr,target){

    let low = 0
    let high = arr.length-1
    let mid 

    while (low <= high){
        
        mid = Math.floor(low + (high-low)/2) 

        if(arr[mid]===target) return mid


        
     else if(arr[low]>arr[mid]||arr[high]>arr[mid]){
//[10,11,4,5,7,8,9]
        if(target>=arr[mid]&& target<=arr[high]){
            low = mid+1
        }
        else{
            high = mid-1
        }
    }

    else if(arr[mid]>arr[low] || arr[mid]>arr[high]){
        
    }

else{
    low++

}
    }
    return false
}
