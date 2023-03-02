function capitalizeFn (arr){
    result = []
    if(arr.length==0) return []

    let s = arr[0] [0].toUpperCase()+arr[0].slice(1)
    console.log(s)
    result.push(s)

    return result.concat(capitalizeFn(arr.slice(1)))

}
let arr = ["abc","def","ghi","jkl"]
console.log(capitalizeFn(arr))


