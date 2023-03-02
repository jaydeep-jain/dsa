// maximum repeating number 
let arr = [1,2,2,1,3,2]
let result =checkMRN(arr)
console.log(result)

function checkMRN (arr){

    var mp = new Map()
    
    for(let i = 0;i<arr.length; i++){
    let x = arr[i]
    if(mp.has(x)){
    mp.set(x,mp.get(x)+1)
    }
    else{
    mp.set(x,1)
    
    }
    
    }
    
    let maxFreq = 0
    let ans = 0
    mp.forEach((value,key)=>{
   // console.log("key=",key,"and value = ",value)
   console.log(value)
    if(value>maxFreq){
    maxFreq = value
    ans = key
    }
    else if (value == maxFreq){ // if value jo ki equal ho meand same diffrent element but frequecy same to ham jo chhota hoga use batayege okk

    if(key<ans){   // see ham dekh rahe hai ki key small hai to use ans me assign kar ke print kara de
        
    ans = key
    }
    
    }
    
    })
    return ans
    }
