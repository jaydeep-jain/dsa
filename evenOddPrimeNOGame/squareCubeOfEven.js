let arr = [1,2,4,3,9,5,12,4,18]

function queSquare(arr){
let square = []
let que = []
    for(let i = 0;i<arr.length;i++){

        if(arr[i] % 2===0){
            square.push(arr[i]**2)
            que.push(arr[i]**3)

        }
    }
    return ["this is square =>"+square,"this is que =>"+que]
}

console.log(queSquare(arr))