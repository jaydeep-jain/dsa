// Search in Rotated Sorted Array II

let arr = [11,340,780,3,7]//[1,0,1,1,1,1];
let target = 7

//Linear Search -> for loop -> O(n)
//Binary Search 
const func = (arr, target) => {
    
    let low =0;
    let high = arr.length -1;
    let mid;

   while(low<= high){
        
        mid = Math.floor(low+(high-low)/2);
        
        if(arr[mid] === target)
            return mid;
        
        else if(arr[mid] < arr[high] || arr[low] > arr[mid])
        {
            if(target >= arr[mid] && target <=arr[high])
                low = mid+1;
            else
            {
                high = mid-1;
            }
        }
        
        else if(arr[low] < arr[mid] || arr[mid] > arr[high])
        {
            if(target <= arr[mid] && target >= arr[low] )
                high = mid-1;
            else
             low = mid+1;
        }
       
       else
       {
           // arr[low] === arr[high] === arr[mid]
           low++;
      }
    }
  return false;  
}
console.log(func(arr, target));




