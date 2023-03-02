// this is the brute force method 
let arr = [5,10,15,25,28 ,30 ,32]

let target = 39
let check = (arr,target)=>{
 let nearest = Number.MAX_VALUE
 let newArr = []
    for(let i = 0 ; i<arr.length; i++){
        for(let j= i+1 ; j<arr.length;j++){
          let diff = Math.abs(target-(arr[i]+arr[j]))
          if(nearest>diff){

            nearest = diff
            if(newArr.length !== 0){
            newArr.pop()
            newArr.pop()
            }

            newArr.push(i,j)
          
}
   }
      } return newArr

}

console.log(check(arr,target));