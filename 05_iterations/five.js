const coding = ["js", "java" , "py", "ruby"]

// coding.forEach( function (item) {
//     console.log(item);
// })




// coding.forEach((item) => {
//     console.log(item);
// })



// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })


const myCoding = [
    {
        languaugeName : "javascript",
        languageFileName: "js"
    },
    {
        languaugeName : "java",
        languageFileName: "java"
    },
    {
        languaugeName : "python",
        languageFileName: "py"
    },

]

myCoding.forEach((item) => {
    console.log(item.languaugeName);
})