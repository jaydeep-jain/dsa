let s = "ABAB"
let k = 2

const characterReplacement = (s, k) => {
    let left = 0; 
    let right = 0;
    let maxCharCount = 0; // to check maxCharCount for anyNumber
    const visited = {}; // key value pair making for unique rahe 
  
    while (right < s.length) { 
      const char = s[right]; // taking first char
      visited[char] = visited[char] ? visited[char] + 1 : 1; // set freq if pahle se hai to 
      // badha dege nahi to 1 hi rahne dege

  //console.log(visited[char])
      if (visited[char] > maxCharCount) maxCharCount = visited[char]; // maxCharCount set kar dege 
  
      if (right - left + 1 - maxCharCount > k) {
        // if this condition is true to ham 
        visited[s[left]]--;
      
        left++;
      }
  
      right++;
    }
  
    return right - left;
  };
  
let res = characterReplacement(s,k)
//console.log(res)
