let str = "abcd"
let substr = "cdab" 

console.log(check(str,substr))

function check (str,substr){

    if(str.length == substr.length && ((str+str).indexOf(substr) != -1))
    return "Yes"
    return "No"
}

