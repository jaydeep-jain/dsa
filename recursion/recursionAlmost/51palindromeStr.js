
function palindrome(str) {

    if(str.length <= 1) return true

   if(str[0]==str.slice(-1))  return palindrome (str.slice(1,-1))

   else return false

}

let str = "civic"
let str1 = "123454321" 
console.log(palindrome(str))
