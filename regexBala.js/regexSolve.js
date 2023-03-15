//let reg = /^[a-z,0-9,\W_]+$/ //for checing mix string+number+speChar
// base ==> /^[a-z]+$/<-- you can add number as well as spe chara using their perticular regex

let str  = "this is bhaukali room bro ka no hai 43443 $dkjlkd jfijsd55kj jfdjf$jkjd 8989 2342 233 ^*&^*&  (*&( ^&%$^%*&"
let reg = /^[a-z]+$/
function check(str){
let word = []
let number = []
let speChar= []
    let arr = str.trim().split(" ")
  //  console.log(arr.length)
    for(let i = 0;i<arr.length;i++){
        if(reg.test(arr[i])){
        //    console.log(arr[i])
            word.push(arr[i])
            
        }
        if (/^[0-9]+$/.test(arr[i])){
           // let n = Number(arr[i])
            let n = parseInt(arr[i])
            number.push(n)
        }
         if (/^[\W_]+$/.test(arr[i])){
           // let n = Number(arr[i])
            //let n = parseInt(arr[i])
            speChar.push(arr[i])
            
    }
    }
    return[word,number,speChar]
}
console.log(check(str))