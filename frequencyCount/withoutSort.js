// here we did not use any sort method instead of that we use for loop for shorting
let arr = [6,2,4,10,2,5,9,10,10]

for(let j=0;j<arr.length;j++){
    if(arr[j]>arr[j+1]){
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1]= temp
        j=-1  // using -1 for resetting the value loop phir se 0 se chalega kyoki hame aage ki bhi check karna hai
    }
}
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