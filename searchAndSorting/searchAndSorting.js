
// so the question is ki we have to sort the array with less time and space complexity 


// // 1. sort the arr
// arr.sort((a,b) => a-b);//increasing
// arr.sort((a,b) => b-a);//decreasing
// // T.C : O(nLogn)     <--- this has time complexity O(nLogn) so we avoid this method

// //2. countOf 0++ = 6

//  //   countOf 1++ = 7

//     O(n)
//     for(0-6)
//     arr.push(0)
//     for(7-14)
//     arr.push(1)
    
let arr = [0,1,1,1,0,1,0,1,0,0,0,1];
//let ans = [0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1];
//let arr = [1,1,1,1,0,0,1,0]

const segregate = (arr) => {  // this "two pointers" method we find perfect for sorting 
    let n = arr.length;
    let left = 0;
    let right = n-1;
    
    while(left<right){
        
        while(arr[left] == 0 && left< right)
          { 
              left++;
               
          }
            
        while(arr[right] == 1 && left< right)
         {   right--;}
        
        if(left< right){
            arr[left] = 0;
            arr[right] =1;
            left++;
            right--;
        }
    }
    
    console.log(arr);
}
    
segregate(arr);

// TC : O(n)
// SC : O(1)
