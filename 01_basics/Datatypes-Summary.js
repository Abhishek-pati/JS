/*
->Primitive

7 types:String,number,boolean,null,undefined,symbol,BigInt

->Reference (N0n-Primitive)

Array,Objects,Functions
*/

const id = Symbol('458')
const newId = Symbol('458')

console.log(id == newId);
//Object
let myObj = {
    name:"Abhishek",
    Age : 21,
}

//Function

const myFunction = function(){
    console.log("Hello World");
}
