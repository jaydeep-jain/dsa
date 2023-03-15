let num = 20

function isPrime(n){

    for(let  i = 2;i<=Math.sqrt(n);i++){
        if(n % i==0) return false
    }

    return true
}

// let x =isPrime(n)
// console.log(x)
function primeSet(num){
    let arr = []
    let setArr = []

    for(let i = 2 ;i<=num;i++){
        if(isPrime(i)){
            arr.push(i)
        }
    }

    for(let i = 0;i<arr.length;i++){
        for(let j = i+1;j<arr.length;j++){

          setArr.push([arr[i],arr[j]])

        }
    }
    return setArr
}
let z = primeSet(10)
console.log(z)
