function isPrime(n){

    for(let i = 2 ;i<=Math.sqrt(n);i++){
        if(n % i == 0) return false
    }
    return true
}

//console.log(isPrime(11))

function makeRange (num){

    let arr    = []
    //let subArr = []

    for(let i = 2;i<=num;i++){
        if(isPrime(i)){
            arr.push(i)
        }
    }

const originalArray = arr

const subArrays = [];

for (let i = 0; i < originalArray.length; i += 5) {
  const subArray = originalArray.slice(i, i + 5);
  subArrays.push(subArray);
}
if(subArrays[subArrays.length-1].length==0){
    subArrays.pop()
}
return (subArrays);



     

}

console.log(makeRange(100))