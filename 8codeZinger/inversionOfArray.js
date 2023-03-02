const arr = [12,34,87,34,63,23]
const arr1 =[1,2,3,4,5,7]
let len = arr1.length

function inversion(arr,len){ 

let flag = 0
for(let i = 0;i<len;i++){
    for(let j=i+1;j<len;j++){
        if(arr[i]>arr[j])
        flag ++
}

}

return flag
}

console.log(inversion(arr1,len))