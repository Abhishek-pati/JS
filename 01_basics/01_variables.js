const accountId = 1227
let accountEmail = "abhishek@google.com"
var accountPassword = "4567"
accountCity = "Bhubaneswar"
let accountState;
//accountId = 2;  //not allowed

accountEmail = "abc@gmail.com"
accountPassword = "123"
accountCity = "Rourkela"
console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
 */
console.table([accountEmail,accountPassword,accountCity,accountState])