/*  * time complexity - time complexity is defined as

1. the amount of time taken by an algorithm to run 
2. time complexity defined as a function of the length of the input

1. worst case (Big-O)   - `n` (1,2,3,4,5----,n)

2. avg. case (Big-Theta) - `n+1/2`

3. best Case (Big-Omega)  - `1`

Defined time -

1. constant time - O(1)
2. linear time -O(n)
3. logarithmic time- O(log n)
4. quadratic time  - O(n^2)
5. cubic time    - (n^3)


O(1) < O(log n) < O(n)< O(n log n)< O(n^2) <O(n^3) */
// ------------------------------------

// 1. time type - constant time O(1) time complexity 

// for (let i=0;i<5;i++){
    //     console.log("hello")
    // }
// ------------------------------------


  // 2.linear time n it depends on the variable O(n) time 

//   let n = 2 // <---- bcs there is using variable 
//   for (let i =0 ;i<n ;i++){
//     console.log("hiii");   
//   }

/*  this is one more example of O(n)==>
{

    this is O(n) or order(n) time complexity
function any (){
    var total = 0 
 for( var i = 0; i<n ; i++){
        total += i

    }
    return total 

}

}
*/
//----------------------------------------------------------------------------------
  // 3.logarithmic  O(log n) time complexity

// let n = 16
// for(let i=0 ; i<=n ; i=i+4){
//     console.log("hii")
// }

// the reason behind the O(log n) time complexity here ki jo i value hai this is not linear means this is not increasing one by one

// this is another example 

// this is O(log n) time complexity

// function any(n){
//     var count =0 
//     while (n>1){
//         n/= 2
//         count++
//     }
//     return count
// }

//-------------------------------------------------------------
// 4. Quadratic time O(n^2)

// this is working in double loop means in square if we give the value of n = 4 that code run 16 times , <- that's why this is quadratic time 

// let n = 4

// for(let i = 0; i<n ; i++){
    //   console.log("ok")
    
    //     for(let j = 0 ; j<n ; j++ ){
        //         console.log("nested for loop")
        //     }
        
 //-------------------------------------------------------------
 // 5. Cubic time O(n^3)
 // let n = 6
//  for(let i = 0 ; i<n ; i++){
//     for(let j=0; j<n ; j++){
//         for(let k=0 ; k<n ; k++){
//             console.log("nested in nested")
//         }
//     }
//  }
 
 //-------------------------------------------------------------
        
        
// how to decide what is this 

// O(1)+O(2)+O(3) = O(1)

// O (n^2 +5n) = O(n^2)

// O(100 n^2 + 1000n + 100) = O(n^2)

// loop-order = order of loop * order of whatever is happening inside the loop

// x = 100(30*200) // O(1)

// x = 100 + (30*200)
// y = 1000000 - x // O(1)+O(1)+O(1) = O(1)


//for (O to x) {
   // console.log(x) // <----------------------------------O(n)
//}

// // for 0 to x {
//     for 0 to y
//     console.log (x*y)  //<--O(n^2)
// }
/* 
for 0 to z {
    console.log(z)  
}
                 //n + n*n = 0(n^2)
for 0 to x {
    for 0 to y{
        console.log(x*y)
    }
}

if(a<0)
--O(1) 

else if a<0
--o(n)

else 0(n^2) /// this is worst case 

*/





 









