for(let i=1;i<=10;i++){
    if(i === 5){
        // console.log("5 is the best number");
    }
    // console.log(i);
}

for(i = 1;i<=10;i++){
    // console.log("TABLE OF "+i);
    for(j =1;j<=10;j++){
        // console.log(i+" * "+j+" = "+i*j);
    }
}

let myArray = ['flash','batman','supeman']

for (let i = 0; i < myArray.length; i++) {
    // console.log(myArray[i]);
}

// Break And Continue
for(let i=1;i<=10;i++){
    if(i === 5){
        console.log("5 is the detected");
        break
    }
    console.log("Value of i is : "+i);
}
for(let i=1;i<=10;i++){
    if(i === 5){
        console.log("5 is the detected");
       continue
    }
    console.log("Value of i is : "+i);
}


