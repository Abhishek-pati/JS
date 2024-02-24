const bgmiUser = {}
bgmiUser.id = "456dfr"
bgmiUser.name = "Eagle Abhi"
bgmiUser.isLoggedIn = false
// console.log(bgmiUser);

const regularUser = {
    fullName : {
        userFullname : {
            firstName: "Abhishek",
            lastName: "Pati",
        }
    }
}

// console.log(regularUser.fullName.userFullname.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

const obj3 = Object.assign({},obj1,obj2)
const obj4 = {5:"e"}
const obj5 = {...obj2,...obj4}
// console.log(obj3);
// console.log(obj5);

const array =[
    {
        id : "abc",
        email:"xyz"
    },
    {
        id : "abc",
        email:"xyz"
    },
    {
        id : "abc",
        email:"xyz"
    },
]

array[1].email

// console.log(bgmiUser);
// console.log(Object.keys(bgmiUser));
// console.log(Object.values(bgmiUser));
// console.log(Object.entries(bgmiUser));
console.log(bgmiUser.hasOwnProperty('name'));