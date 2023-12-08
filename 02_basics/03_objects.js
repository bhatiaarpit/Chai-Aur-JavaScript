// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Arpit",
    "full name": "Arpit Bhatia",
    mySym: "mykey1",
    age: 18,
    location: "lucknow",
    email: "arpit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);  

JsUser.email = "arpit@google.com"
// Object.freeze(JsUser)
JsUser.email = "arpit@goe.com"
// console.log(JsUser );

JsUser.greeting =function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo =function(){
    console.log('Hello Js user, ${this.name}');
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());