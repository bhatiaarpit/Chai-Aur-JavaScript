let a = 300;

if (true){
    let a = 10
    const b = 20
    // console.log("inner: ", a);
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "arpit"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    // two()
}
// one()

if (true) {
    const username ="hitesh"
    if (username === "arpt") {
        const website = "youtube"
        // console.log(username + website);        
    }
    // console.log(website);
}
// console.log(username);



// +++++++++++++++++++++++++++++++++++++
// addone(5) //here you can access addone before initialization
function addone(num){
    return num + 1
} 

addone(5)

// addTwo(5) //we can not access addtwo before initialization
const addTwo = function (num) {
    return num + 2
}
// addTwo(5)