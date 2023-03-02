// with the help of two pointer method find least some of pair which is equal lo x

var arr = [10,22,28,29,30,40]
var n = 6
var x = 54

console.log(closestPair(arr,n,x));

function closestPair(arr,n,x){
    var l = 0
    var r = n-1
    var diff = Number.MAX_VALUE
    var a,b

    while(l<r){
        var pairSum = arr[l]+arr[r]
        var currDiff = Math.abs(pairSum-x)
        if(currDiff<diff){
            diff = currDiff
            a = arr[l]
            b = arr[r]
        }
        if(arr[l]+arr[r]>x){
            r--
        }
        else {
            l++
        }
       
    } 
  return [a,b];

}

//TC = O(n)
//SC = O(1) 