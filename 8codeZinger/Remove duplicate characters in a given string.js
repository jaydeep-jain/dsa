let str = "asdfasdffafgh"

console.log(rdc(str))

function rdc (mystr){
    var unik = ''
    for(let i =0 ;i<mystr.length;i++){
    if(unik.includes(mystr[i]) == false){
        unik += mystr[i]
    }
 }
 return unik
}


// function rdc (mystr){
//     var unik = ''
//     for(const chr of mystr){
//     if(unik.includes(chr)== false){
//         unik += chr
//     }
//  }
//  return unik
// }


