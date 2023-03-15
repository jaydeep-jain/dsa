// // function x(){
// // console.log(1," next will take 4 after this")

// // setInterval(() => {
// //     console.log(3)
    
// // }, 3000);
// // // }
// // // x()

// function x(){
//     for(let i =1;i<=5;i++){
//     setTimeout(function(){
//     console.log(i)},i*5000)
//     }
//     }
// x()

function isPrime(n){

    for(let i = 2;i<Math.sqrt(n);i++){
        if(n%i===0){
            return false
        }
    }
    return true
}

let x =isPrime(n)
console.log(x)
