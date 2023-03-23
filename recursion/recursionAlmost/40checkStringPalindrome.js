const isAlphaNumeric = str => /^[a-z0-9]+$/gi.test(str);

function isPal(s){
    // base condition
    if(s.length<2){ 
     return true 
    }
    // check
    // if false
    let l = s.length
    if(s[0]!=s[l-1]){
        return false
    }
    return isPal(s.slice(1,-1))
}
var isPalindrome = function (s){
    let newstr = ""
    let l = s.length
    for(let i = 0 ; i<l;i++){
        let ch = s[i].toLowerCase()
        if(isAlphaNumeric(ch)){
            newstr += ch
        }
    }
    if(newstr.length<2) return true
    return isPal(newstr)
}
console.log(isPalindrome("madam%$#"))




