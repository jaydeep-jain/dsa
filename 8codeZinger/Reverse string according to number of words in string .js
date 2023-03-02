let x = ["misto","rolo","reeba","fedr","mongo","redis"]

console.log(check(x))

 function check(x){
    let a = []
    if(x.length%2==0){
        for(let i = 0 ; i<x.length;i+=2){
            a.push(x[i])
               
        }
        console.log(a) // check 'a' me kya aaya hai
        for(let i=1 ;i<x.length;i+=2){
            let t = x[i]
            let temp = ''
            for(let i = t.length-1;i>=0;i--){
                
                temp+=t[i]
            }
        //    console.log(t)
        //    console.log(temp)
           a.unshift(temp)
        }
    }
    else {
        for(let i=1; i<x.length;i+=2){
            a.push(x[i])
        }
        for(let i=0 ;i<x.length;i+=2){
            let t = x[i]
            let temp = ''
            for (let i = t.length-1;i>=0;i--){
                temp += t[i]
            }
            a.unshift(temp)
        }
    }
    return a
}