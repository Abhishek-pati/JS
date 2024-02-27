// Immediately Invoked Function Expression (IIFE)

(function one (){
    //named IFFE
    console.log(`DB CONNECTED`);
})();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('Abhishek')