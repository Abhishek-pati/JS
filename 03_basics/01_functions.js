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

console.log(loginUserMessage());