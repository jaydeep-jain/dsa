function rec(i,n){
    if(i>n) return;

    // recursive 

    console.log(i);
    rec(i+1,n);  // because of recursion it's going in stack
}

rec(1,5)
console.log("Iterative");
let n=5

for(let i=1;i<=n;i++){
    console.log(i);
}