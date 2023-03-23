let s = "bacabcbb"
var lengthOfLongestSubstring = function(s){

    let freq = {}
    let start = 0
    let ans = 0 

    for (let end = 0 ; end<s.length; end++){
        
        while(freq[s[end]]==1){
            freq [s[start]]=0
            start ++
        }
        freq [s[end]]=1
        ans = Math.max(ans, end-start+1)
    }
    return ans
}
console.log(lengthOfLongestSubstring(s));

// var lengthOfLongestSubstring = function (s) {
//     var max=0,
//         theSub=''
//     for(var i=0;i<s.length;i++){
//         const idx=theSub.indexOf(s[i])
//         theSub+=s[i]
//         if(idx>=0){  
//          theSub= theSub.slice(idx+1) 
//         }
//         if(theSub.length>max){
//             max=theSub.length
//         }
//     }
//     return max
// }
	

