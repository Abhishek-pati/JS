// For Each

const coding = ["JS",'JAVA','PY','RB','C++']

// coding.forEach(function(val){
//     console.log(val);
// })

// coding.forEach((val)=>{
//     console.log(val);
// })

// function printMe (item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((val,index,arr)=>{
//     console.log(val,index,arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((val)=>{
    console.log(val.languageFileName);
})