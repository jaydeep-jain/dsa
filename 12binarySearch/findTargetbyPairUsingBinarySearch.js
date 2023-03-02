// so here we have to do find the element which some 14 instead of nested loop we are using this binary search method 
//2. Two Sum II - Input Array Is Sorted
let arr = [2,4,5,6,7,8,16];
let target = 14;
//return an array with index -> [3,5]
//Brute Force O(n^2)
//Two Pointer O(n)
//Binary Search 
//TC: O(n* logn)
const func = (arr, target) => {
    
    for(let i=0;i<arr.length;i++){ 

    let complement = target - arr[i]; 
    let low = i+1;  
    let high = arr.length-1; 
    let mid;
       while(low<=high){ 
        mid = Math.floor(low+(high-low)/2);
           
           if(arr[mid] == complement) 
           {
              return [i,mid]; 
           }
          else if(arr[mid]>complement){  
               high = mid-1;              
           }
          else{
               low = mid+1;      
           }
       }
    }
    return false
}
console.log(func(arr, target));








