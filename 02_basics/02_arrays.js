const marvelHeros = ["thor","ironman","spiderman"]
const dcHeros = ['superman','flash','batman']

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

const allNewHeros = [...marvelHeros,...dcHeros]
// console.log(allNewHeros);

const anotherArray = [1,2,3,[4,5,6],7,[4,5]]
const realNewArray = anotherArray.flat(Infinity)
// console.log(realNewArray);

console.log(Array.isArray("Abhishek"));
console.log(Array.from("Abhishek"));
console.log(Array.from({name: "Abhishek"}));//Intresting

let score1 = 500
let score2 = 100
let score3 = 200
console.log(Array.of(score1,score2,score3));
