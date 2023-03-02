 function fib (n){

    if(n==0) return 0 // if we not write base condition than Maximum call stack size exceeded and the range error come
    if(n==1) return 1// if we not write base condition than Maximum call stack size exceeded and the range error come
 
   return  fib(n-1)+ fib(n-2)
 }
 console.log(fib(10));

 // fibb is a series you have to put which no of element you want 

 // like you want 10th element so it will add the value of both 9th element + 8th element and give result
 

