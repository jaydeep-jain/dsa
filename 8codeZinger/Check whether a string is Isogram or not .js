
let str = 'machine'


let fun = (str) => {
     let flag = "Yes"
    for(let i=0;i<str.length;i++){
          
            for(let j=i+1;j<str.length;j++){
                
                if(str[i]==str[j]){
                    flag ="No"
                    break;   
                }                
             
            }
           
}
return flag
  
}

console.log(fun(str))