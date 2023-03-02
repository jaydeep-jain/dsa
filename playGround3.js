let str1 = "aana"
let str2 = "aaas"

const anagram = (str1,str2)=>{ 
  if(str1.length!==str2.length) return false

let arr1 = str1.split("")
let arr2 = str2.split("")
// console.log(arr1)
let map1 = new Map()
let map2 = new Map()

for(let key of arr1){
  if(map1.has(key)){
    map1.set(key,map1.get(key)+1)
  }
  else{
    map1.set(key,1)
  }
}
for(let key of arr2){
  if(map2.has(key)){
    map2.set(key,map2.get(key)+1)
  }
  else{
    map2.set(key,1)
  }
}
console.log(map1)
map1.forEach((e)=>{
  console.log(e)
  if(!(e in map2)){
    return false}
})

return true

}
console.log(anagram(str1,str2))