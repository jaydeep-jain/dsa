let arr =  [1,2,3,4,5,6]

for(let i = 0 ; i<arr.length;i+=2){
    console.log(arr[i] + " index " + [i])
}

const myTimeout = setTimeout(myGreeting, 5000);

function myGreeting() {
  console.log(  "Happy Birthday!")
}