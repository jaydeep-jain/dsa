

let s1 = "ram nam skam"
let s2 = "skam"



function solution(s1, s2) {
    let n = s1.length;
  // console.log(n)
    let m = s2.length;
  //  console.log(m)
    let x = n - m;
 //   console.log(x)
    if(n < m) {
        return -1;
    }
    
    for(let i = 0; i <= x; i++) {
        let j;
        for(j = 0; j < m; j++) {
            if(s1[i + j] != s2[j]) 
           // console.log(s1[i + j])
            //console.log(s1[i + j] != s2[j]) 
                break;
            }
        
        if(j == m) {
            return i;
            break;
        }
       // console.log(i +"hirru")
        
        if(i == x && j !=m) {
            return -1;
        }
    }
    
}

console.log(solution(s1,s2))
