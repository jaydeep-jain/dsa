//maximum number of Vowels in a substring of given length

let s = "shinjion"

let k = 3

console.log(maxVowels(s,k))

function check(ch){ // this function meade for check the vowels its like a engine or machine which is chaeking vovels
    if(ch == "a"||ch =="e"||ch =="i"||ch =="o"||ch =="u"){
        return true
    }
    return false
}

//let s = "shinjion"
 function maxVowels (s,k){
    let c = 0
    let  maxcount = 0
    for(let i = 0 ;i<k;i++){
        if(check(s[i])){// this is checking ki vowels hai ya nhi 
            c++
        }

    }
    maxcount = Math.max(maxcount ,c)

    for(let i =k;i<s.length;i++){
        if(check(s[i-k])){
            c--
        }
        if(check(s[i])){
            c++
        }
        maxcount = Math.max(maxcount,c)
    }
    return maxcount

}