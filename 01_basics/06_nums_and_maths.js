//*************************** Nums ****************************
const score = 500
const balance = new Number(100)
console.log(score);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 21.99
console.log(otherNumber.toPrecision(2));

const anotherNumber = 1000000
console.log(anotherNumber.toLocaleString());// US type
console.log(anotherNumber.toLocaleString('en-IN'));// INDIA type

//*************************** Maths ****************************

console.log(Math.abs(-5));
console.log(Math.round(45.55));
console.log(Math.floor(Math.random()*10)+1)

const min = 5
const max = 20
console.log(Math.floor(Math.random()*max-min)+min);