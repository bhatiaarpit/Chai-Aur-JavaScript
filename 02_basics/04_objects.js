// const tinderUser = new Object()   //it is a singleton object

const tinderUser = {}   //Non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email: "arpit@gmail.com",
    fullname: {
        userfullname:{
            firstname : "arpit",
            lastname : "bhatia",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname.lastname);



const obj1 = {2:"d", 3:"e"}
const obj2 = {7:"d", 5:"e"}
const obj4 = {4:"y", 9:""}

// const obj3 ={obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);

const obj3 ={...obj1, ...obj2, ...obj4}
// console.log(obj3);


const users = [
    {
        id : 1,
        email : "a@gmail.com"
    },
    {
        id : 1,
        email : "a@gmail.com"
    },
    {
        id : 1,
        email : "a@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty('isLoggedIn'));




//destructuring

const course ={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}


const {courseInstructor : instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// const navbar = ({company}) => {  // the curly braces are used for destructuring of object in react
// }
// navbar(company = "hitesh")

//JSON Talk

// {
//     name: "arpit",
//     coursename: "js in hindi",
//     price: "free"
// }

[
    {},
    {},    //json = javascript object notation
    {},
]