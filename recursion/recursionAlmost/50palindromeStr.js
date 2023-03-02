
function palindrome(str) {

    if(str.length <= 1) return true

    return (str[0]==str.slice(-1) && palindrome(str.slice(1,-1)))

}

let str = "civic"
//let str1 = "margeletswentawaitnewstelegram" 
console.log(palindrome(str))

