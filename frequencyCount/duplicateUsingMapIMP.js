function duplicate(arr){
    let frequencies = new Map()

    for(let i = 0 ;i<arr.length;i++){
       
        // console.log(frequencies.get(arr[i])) // if map me value na ho to undefined aata hai
       
        if(frequencies.get(arr[i])==undefined) frequencies.set(arr[i],1)

        else frequencies.set(arr[i],frequencies.get(arr[i])+1)

    }
   // console.log(frequencies)
   // console.log(frequencies)
    let res = []
    for(let pairs of frequencies){
        console.log(pairs)
        if(pairs[1]>1) res.push(pairs[0])
    }
    return res
}
let arr = [13,3,5,3,6,8,5]
console.log(duplicate(arr))