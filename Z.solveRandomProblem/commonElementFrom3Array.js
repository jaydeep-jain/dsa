// function commonElements(arr1, arr2, arr3, n1, n2,n3){
//     //code here
//     let i = 0, j = 0, k= 0;
//     let ans = [];
//     while(i < n1 && j < n2 && k < n3) {
//         if(arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
//             ans.push(arr1[i])
//             i++; j++; k++;
//         }
//         else if(arr1[i] < arr2[j]) i++;
//         else if(arr2[j] < arr3[k]) j++;
//         else k++;
//     }
    
     //return [...new Set(ans)]
//     // return ans
// }
// let arr1 = [1,2,4,6,11,20]
// let arr2 = [6,10,11,]
// let arr3 = [5,6,8,11]
// let n1 = arr1.length
// let n2 = arr2.length
// let n3 = arr3.length
// console.log(commonElements(arr1,arr2,arr3,n1,n2,n3))








// brute force method 

let arr1 = [1,2,5,4,6]
let arr2 = [6,10,11,5]
let arr3 = [5,6,8,0]
let commonArray = []
for(let i =0 ;i<arr1.length;i++){
    for(let j= 0;j<arr2.length;j++){
        for(let k=0;k<arr3.length;k++){
            if(arr1[i] == arr2[j] && arr2[j]==arr3[k]){
                commonArray.push(arr3[k])
                
            }
        }
    }
}
console.log(commonArray)