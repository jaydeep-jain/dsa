let str="apple3lives7 seventeen 0 string"// remove the number and add space in place of number


function strings (str){
let s = ""
    for(let i = 0;i<str.length;i++){
        if(!Number.isInteger(+str[i])){
            s += str[i]
        }
        else{
            s+= " "
        }


    }
    return s
}
 
console.log(strings(str))
