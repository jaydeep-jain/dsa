let s = "shinjion"
let k = 3
console.log(checkMaxVovels(s,k));

function checkVowelsMachine(s){
    if(s=="a"||s=="e"||s=="i"||s=="o"||s=="u") {
        return true
        
    }
    return false
}

function checkMaxVovels(s,k){
    
    let count = 0
    let maxcount = 0
    let arr = []
    let arrFull = []

    for(let i = 0 ;i<k ;i++){
        
        arrFull.push(s[i]) 
        if(checkVowelsMachine(s[i])){ 
        arr.push(s[i])

        count++
        }
  }

  maxcount = Math.max(count,maxcount)

  for(let i = k ;i<s.length;i++){

      arrFull.shift()

    if(checkVowelsMachine(s[i-k])){
        count--
        arr.shift()
    }

    arrFull.push(s[i])

    if(checkVowelsMachine(s[i])){
        
        arr.push(s[i])
        count++

    }

    maxcount = Math.max(count,maxcount)
  }
  
  let actualWindow = arrFull
  let vovelsFromWindow = arr

return "this is actual window "+actualWindow+" as well as vovels from that window is " +vovelsFromWindow+" and there count is "+maxcount

}