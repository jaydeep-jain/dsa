// remove otherElement from alphanumeric series and check the string is palindrome or not

const isAlphaNumeric = str => /^[a-z0-9]+$/gi.test(str);

function reverseString(str){
// empty string
let newString = "";
for(let i = str.length -1; i>= 0; i--){
    newString += str[i]
}
return newString
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
    if(newstr == reverseString(newstr)) return true
    return false
}
   console.log(isPalindrome("madam%$#"))



































































// let a = [3,5,7,10,12]
// let c = 0
// let b = a.length-1
// let d = []
// //console.log(b)
// // for(let i = 0 ;i<=b ;i++){
// //     console.log(i)

// // }
// // while (c<=b){
// //     d.push(a[c]*2)
// //     c++
// // }
// // console.log(d)

// for (let i of a)
// console.log(i)