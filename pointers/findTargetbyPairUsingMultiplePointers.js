//multiple pointers

let arr = [1,2 ,5, 6, 7]
let n = 5
let x = 4
console.log(ok(arr,n,x))
function  ok(arr,n,x){
    arr.sort((a,b)=>a-b) //time complexity O(n log n)

    let i = 0
    let j = n-1
    while(i<j){ // time complexity O(n)
        if(arr[i]+arr[j]==x){
            return [i,j]
        }

        else if(arr[i]+arr[j]<x){
            i++
        }

        else {
            j--
        }
    }
    return false
}

// so total time complexity is O(n log n)

// and space complexity is O(1)
