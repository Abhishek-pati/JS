// singleton
//Object.crete

// object literals

const mySym = Symbol("key1")

const user = {
    name : "Abhishek",
    "full name" : "Abhishek Pati",
    [mySym] : "myKey1",
    age : 22,
    location :"Bhubaneswar",
    email : "abhishek@tencent.com" ,
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(user[mySym]);

user.email = "abhishek@google.com"
// Object.freeze(user)
user.email ="abhishek@bgmi.com"
console.log(user);

user.greetings = function () {
    console.log("Hello , Good Morning");
}

user.greetings2 = function(){
    console.log(`Hello , Good Morning ${this.name}`);
}

console.log(user.greetings());
console.log(user.greetings2());