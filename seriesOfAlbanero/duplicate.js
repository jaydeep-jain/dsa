let arr = [2,8,2,3,4,0,1,8]

// get only one time all number

function nr (arr){
    let nArr = []
    for(let i = 0;i<arr.length;i++){
        if(!nArr.includes(arr[i])){
            nArr.push(arr[i])
        }
    }
    return nArr

}


console.log(nr(arr))

