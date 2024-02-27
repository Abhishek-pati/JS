const user = {
    userName:"Abhishek",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.userName},Welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.userName = "Sam"
// user.welcomeMessage()

// function chai (){
//     let usename="Abhishek"
//     console.log(this.userName);
// }
// chai()

// const chai = function(){
//     let usename="Abhishek"
//     console.log(this.userName);
// }
const chai = ()=>{
    let usename="Abhishek"
    console.log(this.userName);
}
// chai()

const addTwo = (num1,num2)=>{
    return num1+num2
}

const multiply = (num1,num2)=>  num1*num2


console.log(addTwo(2,5))