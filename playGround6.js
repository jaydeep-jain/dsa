let arr = [1,3,4,5,1,0,1,8,2,8,2]

let obj = {...arr}
console.log(obj)

let obj1 = {}
for(let key of arr){
    obj1[key] = (obj1[key]||0)+1

}
console.log(obj1)
let map = new Map()
for(let key of arr){ 
if(map.has(key)){
    map.set(key,map.get(key)+1)
}
else{
    map.set(key,1)
}
}
console.log(map)


