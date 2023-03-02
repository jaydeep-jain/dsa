function reverse(str){
    if(str.length==0) return ""
    return reverse (str.slice(1))+str[0]
}
function revSentWords(sent){
    
    if(!(Array.isArray(sent))){
        words = sent.split(" ")

    }

    for(let i = 0 ;i<words.length;i++){
        words[i] = reverse(words[i])
    }
    return words.join(" ")
}

let str = "this is mine home"

console.log(revSentWords(str))