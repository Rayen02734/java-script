function fact(n){
    var f=1
    for(var i=2; i<=n;i++){
        f*=i
    }
    return f
}
console.log(fact(5))

function fibo(n){
     if (n==0 || n==1){
         return 1
     }
     else{
         return fibo(n-1)+fibo(n-2)
     }
 }
 console.log(fibo(8))

 function premier(x){
     for(var i=2;i<=x/2;i++){
         if(x%i==0){
             return false
         }
     }
     return true
 }
 console.log(premier(11))

 var array=[18,9,12,50]
let max=array[0]
for(let i=1;i<array.length;i++){
    if(array[i]>max){
        max=array[i]
    }
}
console.log(max)

function min(tableau){
    var min=tableau[0]
    for(x of tableau){
        if(x<min){
            min=x
        }
    }
    return min
}
console.log(min([-1,-9,-5555]))

function countchar(str,c){
    var count=0
    for(let i=0;i<str.length;i++){
        if(i==str[i]){
            count++
        }
    }
    return count
}
console.log(countchar("yahya","a"))


function tabinv(str){
    for(var i=str.length-1; i>=0;i--){
        if(str[i].length %2!==0){
            str.splice(i,1)
        }
    }
    return str
}
console.log(tabinv(["rayen","rami","yahya","messi"]))


function inverse(str){
    var t = str.split("")
    t.reverse()
    return t.join("")
}
console.log(inverse("rayen"))

function capital(ch) {
    var array = ch.split(" ")
    for (var i = 0; i < array.length; i++) {
        var mot = array[i]
        if (mot.length > 0) {
            array[i] = mot[0].toUpperCase() + mot.slice(1)
        }
    }
    return array.join(" ")
}
console.log(capital("try programiz pro"))