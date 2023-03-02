function areAnagram (str1,str2){
    // create 2 count arrays and ititialize 
    // all values as 0
    let count1 = new Array (26);
    let count2 = new Array (26);
    for(let i = 0 ; i< count1.length; i++){
        count1[i] = 0
        count2[i] = 0
    }
    let i ;
    // for each character in input strings,
    // increment count in the corresponding
    // count array
    for( i =0 ;i<str1.length&& i<str2.length;i++){
        count1[str1[i].charCodeAt(0)]++
        count2[str2[i].charCodeAt(0)]++
    }
    // if both strings are of different length
    // removing this condition will make the program
    // fail for string like "aaca" and "aca"
    if(str1.length !== str2.length){
        return false
    }
    // compare count arrays
    for(i = 0 ;i< count1.length;i++){
        if(count1[i] !== count2[i]){
            return false
        }
        return true
    }

}
let str1 = "rat"
//str1 = str1.split("").sort()
let str2 = "car"
//str2 = str2.split("").sort()

let result = areAnagram(str1,str2)
console.log(result)















// // brute force method approach 
// let str1 = "aani"
// let str2 = "niaa"

// function isAnagram (str1,str2){
    
//     if(str1.length !== str2.length){
//            return false
//     }
//     str1 = str1.split("").sort()
//     str2 = str2.split("").sort()
//     for(let i = 0 ; i<str1.length ;i++){
//         if(str1[i] !== str2[i]){
//             return false
//         }
//     }
//     return true
// }

// let result = isAnagram(str1,str2)
// console.log(result)