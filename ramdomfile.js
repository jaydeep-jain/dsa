let arr = [1,2,4,2,5]

function quickSort(arr){
        if(arr.length<2) return arr //base

        let pivot = arr[arr.lenght -1]
        let left = []
        let right = []
        for (let i = 0;i<arr.length-1;i++){
            if(arr[i]<pivot){
                left.push(arr[i])
            }
            else{
                right.push(arr[i])
            }
        }
        return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort(arr))