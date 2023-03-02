let str = "cococaca"

let substr = "coca"

console.log(check(str,substr))

function check (str,substr){
    while(str.length>0){
        let indx = str.indexOf(substr) // check ki string se substring hai ya nahi aur hai to variable me save ho jayega varna -1 aa jayga
     
        if(indx == -1){
            break;
        }

        str = str.replace(substr,"")
    }
    if(str.length == 0)
       return "Yes"
    else 
       return "No"

}