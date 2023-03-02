let arr = [ 3,5,8]

let objA ={} 


for(i in arr){
objA[arr[i]] +=1
}

console.log(objA)

for(key in objA){
    console.log(key)
}