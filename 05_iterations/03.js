// for of 

const arr = ['1','2','3','4']

for (const value of arr) {
    // console.log(value);
}

const greetings = "Hello World"
for(const greet of greetings){
    if(greet == greetings.charAt(5)){
        continue
    }
    // console.log(`Each char is : ${greet}`);
}

// map

const map =  new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('FRA','France')
map.set('IN','India')
// console.log(map);

for(const [key,value] of map){
    // console.log(key,":-",value);
}


const myObject = {
    game1:"GTA VICECITY",
    game2:"BGMI"
}

for(const [key,value] of myObject){
    console.log(key,":-",value);
}
