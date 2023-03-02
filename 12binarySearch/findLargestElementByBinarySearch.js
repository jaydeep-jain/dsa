//so in this problem we have to find the largest element from it we can do it using nested loop but this approach will be critical with TC and SC so we using this approach

let arr = [6,3,1,1]
console.log(peak(arr))

function peak (arr){
    let low = 0
   // console.log(low)
    let high = arr.length-1
   // console.log(high)
    let mid
    while(low<=high){  // using while loop
     mid = Math.floor(low+(high-low)/2);
    //console.log(mid)
      if(low==high)
        return low // from here coming output after completing cases 

        else if(arr[mid]<arr[mid+1]) // here we are cheking the value to the index of right side is greater then left side . 
        low = mid+1 // if we find condition we assign new value to low

        else {
            high = mid // here we direclty assingn mid value into high that will affect the loop 
        }
    }
}
//TC : O(logn)
//SC:  O(1)