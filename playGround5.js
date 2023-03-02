let arr = ["flower","flow","flow"]

arr.sort()

let len = arr[0].length

let prefix = ''
for(let i = 0 ;i<len;i++){

    let ch = arr[0][i]
    if(ch===arr[1][i]&&ch===arr[2][i]){
        prefix+=ch
    }

}

console.log(prefix)









