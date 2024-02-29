// const temperatuer = 49.99
// if(temperatuer<50){
//     console.log("Executed");
// }else{
//     console.log("not executed");
// }

// const a = 50
// if(a==50){
//     let user = "Abhishek"
//     console.log(`${user} is Owner`);
// }

// console.log(user);

// const balance = 1000
// if(balance<500){
//     console.log("Less than 500");
// }else if (balance < 700){
//     console.log("Less than 700");
// } else if(balance <900){
//     console.log("Less than 900");
// }else {
//     console.log("Less than 1200");
// }

const userLoggedIn = true
const debitcard = true
const googleMailLoggedIn= true
const facebookLoggedIn = false

if(userLoggedIn && debitcard && facebookLoggedIn){
    console.log("Allow to buy couse");
}

if(googleMailLoggedIn || facebookLoggedIn){
    console.log("Allow to buy course");
}