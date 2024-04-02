let pro = new Promise((resolve,reject) =>{

    if(true){
        resolve("resolve")
    }else{
        reject("false")
    }
})
pro
.then((result)=>console.log(result))

.catch(err=>console.log(err))

