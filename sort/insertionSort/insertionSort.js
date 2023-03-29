let arr = [3,1,5,9,3]

function insertionSort(arr){
    for(let i=1; i<arr.length;i++){
    let numberToInsert = arr[i]  // take number which may be have to insert
    let j = i-1 // take that j which is use for insert is below 1 from i tabhi to change ho payega
    while(j>=0 && arr[j]>numberToInsert){
        arr[j+1] = arr[j] // yaha ham sort karte hai
        j=j-1// yaha se ham loop se bhar hote hai because of firts condition of while
    }
     arr[j+1] = numberToInsert // replace as it as 
    } return arr
}


console.log(insertionSort(arr))