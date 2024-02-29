const userMail = []
if(userMail){
    console.log("Got user email");
}else{
    console.log("Dont have user email");
}

/*
Falsy Values:
-> false , 0 , -0 , BigInt 0n, "",null,undefined,NaN

Truthy VAlues:
-> "0",'false'," ",[],{},function(){}

*/

if(userMail.length===0){
    console.log("Array is Empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("Object is Empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")