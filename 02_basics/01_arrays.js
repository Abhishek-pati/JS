//Array
 const myArray = [4,5,7,8,6,5]
// const myHeros = ["victor","Andy"]
// const myArray2 = new Array(1,5,4,8,6,3)
// console.log(myArray[1]);

//Methods

// myArray.push(10)
// myArray.pop()
// console.log(myArray);
// myArray.unshift(2)
// myArray.shift()
// console.log(myArray);

const myNewAray = myArray.join()
// console.log(myNewAray);
// console.log(typeof myNewAray);

// slice,splice
const a1 = myArray.slice(0,3)
console.log(a1);
console.log("Array after slice: "+myArray);

const a2 = myArray.splice(0,3)
console.log(a1);
console.log("Array after splice: "+myArray);