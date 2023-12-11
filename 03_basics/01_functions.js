function sayMyName() {
    console.log("A");
    console.log("R");
    console.log("P");
    console.log("I");
    console.log("T");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

// function addTwoNumbers(number1, number2) {
// //    let result = number1 + number2
// //    return result  //after the return in function kuch bhi work nhi karegaa
//     return number1 + number2
// }

// const result = addTwoNumbers(3,7)

// console.log("Result: ", result);

function loginUserMessage(username = "arpit") {
    if (!username) {
        console.log("Please Enter Username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())

function calculateCartPrice(...num1){           //(...) it is called as rest or spread
    return num1
}


// console.log(calculateCartPrice(200, 499, 500));

const user ={
    username: "arpit",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 300
})

const myNewArray = [200,100,24]

function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArray));