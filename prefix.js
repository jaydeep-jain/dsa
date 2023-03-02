function prefix(strs){
  
   // strs.sort((e1,e2)=>e1.length-e2.length)
       let st=strs[0]
      for(let i=1;i<strs.length;i++){
        for(let j=0;j<strs[i].length;j++){
            if(strs[i][j]!=st[j]){
                st=strs[i].slice(0,j)
                break
            }
        }
      }
      return st
  }
  
  let arr=["ashish","ankt","ak"]
  console.log(prefix(arr))