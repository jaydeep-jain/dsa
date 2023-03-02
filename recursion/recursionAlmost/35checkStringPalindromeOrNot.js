// using recursion function in palindrome series , 

var isPalindrome = function (s){
    let newstr = ""
    let l = s.length
    for(let i = 0 ; i<l;i++){
        let ch = s[i].toLowerCase()
        if(isAlphaNumeric(ch)){
            newstr += ch
        }
    }
    if(newstr == rev(newstr)) return true
    return false
}

const isAlphaNumeric = str => /^[a-z0-9]+$/gi.test(str);

function rev(s){
    // base
    if(s.length ==1) return s //if last me string ki length 1 bachti hai to return le lege
    // recursive 
    return rev(s.slice(1))+s[0] // in stack we want string in reverse that's why we ue add s[]in back
}
   console.log(isPalindrome("madam%$#"))

