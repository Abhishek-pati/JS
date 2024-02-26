// var c = 100
let a = 200
if(true){
    let a = 20
    const b = 20
    var c = 54
    // console.log("INNER : ",a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one (){
    const userName = "Abhishek"
    function two (){
        const website = "Youtube"
        console.log(userName);
    }
    // console.log(website);
    two()
}

// one()

if(true){
    const userName = "Rohan"
    if(userName === "Rohan"){
        const website = " google"
        console.log(userName+website);
    }
    // console.log(website);
}
// console.log(userName);

// +++++++++++++++ Insteresting +++++++++++++++++


console.log(addOne(5));
function addOne(num){
    return num+1
}

console.log(addTwo(5));
const addTwo= function (num){
    return num+2
}

