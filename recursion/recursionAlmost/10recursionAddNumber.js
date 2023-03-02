// // add the n number through calling recursion in 3 ways

// // this is first (1) way call recursion every time and value put to total

// let n = 5
// let total = 0

// //console.log(sumN(1,n))
// function sumN(i,n){
//     // base
//     if(i>n) return 0
//     // recursive
//     total+= i
//     sumN(i+1,n) // recursive calling
// }
// sumN(1,n)
// console.log(total) // 
//----------------------------------------------------
// another (2) condition add untill n >= 0 

// let total = 0
// let n = 10 

// function rec(n){
    //     if(n<=0) return 
    
    //     total+= n
    //     rec(n-1) 
    // }
    //  rec(n)
    //  console.log(total)
    
//----------------------------------------------------
// now *(3)we are using call stack here 

let n = 8 
let rec = (n)=>{
    if(n<=0) return 0

    return n+rec(n-1)
}
console.log(rec(n))













