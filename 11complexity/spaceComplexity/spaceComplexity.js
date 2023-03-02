// space complexity --

// the space complexity of an algorithm or a computer program is the amount of memory space required to solve an instance of the computational problem as a function of characteristics of the input .

// the amount of momory space required to solve an instance of the computational problem 

// it gives us the information about the variation (increase or decrease) in an algorithm

// HOW TIME COMPLEXITY MEASURED ?
// ANSWER --> by counting the number of primitive opetations performed by the algorithm on a given input size

// for example ek song store karne me 5 mb lagi to 2 song store karne me 10 mb lagega

// you have to solve problem in minimum space or using less variables

// O(1) < O(log n) < O(n)< O(n log n)< O(n^2) <O(n^3)

// example 1 -->
// let a = 9
// let b = 5
// let sum = a+b // order 0(1) bcs there is not using too much spaces not 

// example 2 --> 
// const arr = [];
// let n = 3
// for(i=0;i<n;i++){
//     console.log("hello")
// } // S.C --> O(n)

//-----------------------------------------------------------------------

// const arr = [];
// let n = 3
// for(i=0;i<n;i++){
//     i*=k
// } // S.C --> O(log n)

// ------------------------------------------

let a = 5
let n = 6

for(let i= 0 ;i<n;i++){
    console.log(a*i)
    for(let j=0;i<n;j++){
        i+"ok"+j

    }
}
// S.C --> O( n^2)











