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

// stack(primitive) heap(non-Primitive)

let myNmae = "Abhishek pati"

let myOthername = myNmae

myOthername = "Abhishek"

console.log(myOthername);
console.log(myNmae);

let userOne = {
    email :"xyz@gmail.com",
    upi : "123@ybl",
}

let userTwo = userOne

userTwo.email = "abc@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
