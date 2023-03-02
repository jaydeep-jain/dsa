let num1 = [1,2,3,4,5,6]
let num2 = [5,6,7,8,9]
let arr = []

let set1 = new Set (num1)
let set2 = new Set (num2)

for (let value of set1){
    if(set2.has(value)){
        arr.push(value)

    }
}
console.log(arr)