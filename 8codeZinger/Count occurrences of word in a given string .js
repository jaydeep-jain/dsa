let arr =[ "kee","kee","tir","ok","kee"]
let word = "kee"

console.log(check(arr,word))
function check(arr,word){
    let count =0
    for(let i =0;i<arr.length;i++){

        if(arr[i]==word)
        count ++

    }
    return count
}