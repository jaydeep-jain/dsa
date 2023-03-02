let arr = [2,5,2,6,1,2,1,4,5]
let len = arr.length

console.log(freq(arr,len))

function freq (arr,len){

   let newArr = []
   
    for (let i=0;i<len;i++){
        let count = 0
        let temp = arr[i]
    
        for(let j=0; j<len;j++){
            if(arr[j]==temp)
            count++
        }
         newArr.push(count)
         console.log(count)
    }
   
    return newArr
}

