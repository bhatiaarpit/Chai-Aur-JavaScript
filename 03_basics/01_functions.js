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

console.log(loginUserMessage())
