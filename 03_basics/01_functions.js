// function sayMyName(){
//     console.log("Abhishek");
// }

// sayMyName()

// function addTwoNumbers(num1,num2){
//     // console.log(num1+num2);
//     return num1+num2
// }

// const result = addTwoNumbers(5,5)
// console.log("Result : "+ result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a UserNAme");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());

// function calculateCartPrice(...num3){
//     return num3
// }

// console.log(calculateCartPrice(200,471,523));

const user = {
    username : "Abhishek",
    price : 115
}

function handelObject (anyobject){
    console.log(`UserName is ${anyobject.username} and price is ${anyobject.price}`);
}

// handelObject(user)
// handelObject({
//     username :"Sam",
//     price:100,
// })

