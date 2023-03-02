// frequency counter method => it means we have given an array or string with repeated element we need to find the frequency in same 

// frequency = this pattern uses objects or sets to collect values/frequencies 

// this can often avoid the need for nested loops or O(n^2) operation with arrays/strings

// example (1)---> TC => O(n)

let arr = "helloo aindia"
arr = arr.split("").sort()
console.log(arr)

let count = 0
for(let i=0;i<arr.length;i++){
    if(arr[i] != " "){
    if(arr[i]==arr[i+1])
    count++
    else{
    count++
    console.log(arr[i]+" "+count)
    count=0
    }
  }
}