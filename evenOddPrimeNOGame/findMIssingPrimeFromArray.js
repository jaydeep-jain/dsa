const arr1 = [2, 3, 7, 11, 13, 17, 19, 23, 29];

  function checkPrime (n){
    if(n<2) return "0 and 1 not nedded"
    for(let i = 2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false
        }
    }
    return n>1
}
function nextPrimeNo(arr){
    let min = Math.min(...arr)
    let max = Math.max(...arr)

    for(let i = min ;i<=max;i++){

        if(checkPrime(i) && arr.includes(i)==false){
            return i

        }
    }
    return "there is no missing number here underStand babu ji"
}
console.log(nextPrimeNo(arr1))
