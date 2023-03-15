let s = "naina thag lege ho naina thag lege"
let n = s.length-1
//console.log(n)

// let check = function(str){
//     let nt = ""
//     for(let i=n;i>=0;i--){
        
//         //console.log(s[i])
//         nt = nt+s[i]
//         console.log(nt)
//     }
//     console.log(nt+"   <=here you got the string")
// }
// check(s)

//let s = "ab cd"

let arr = s.split(" ")
//console.log(arr)
let l = arr.length
//console.log(l)
let replace = (str)=>{
    let ts = ""
    for(let i =0;i<l;i++){
        for(let j=arr[i].length-1;j>=0;j--){
ts += (str[i][j])
        }
        ts += " "
    }
    return(ts)
}
let result = replace(arr)
console.log(result)




