let str1 = "defeeaa"
let str2 = "defeeaa"

const anagram = (str1,str2)=>{ 
if(str1.length!==str2.length) return false

let arr1 = str1.split("")
let arr2 = str2.split("")
// console.log(arr1)
//========================
let frequencyCounter1 = {}
let frequencyCounter2 = {}

    for(let val of arr1){
        frequencyCounter1[val]= (frequencyCounter1[val] || 0)+1
    }
    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val]|| 0)+1
   
    } 
    for(let key in frequencyCounter1){
  
        if(!(key in frequencyCounter2)){
            
            return false
        }
        if(frequencyCounter2[key] !== frequencyCounter1[key]){ 
        return false
        }
    }
    return true

//========================

}

console.log(anagram(str1,str2))

