const user = {
    username : "arpit",
    price : 900,

    welcomeMesssage: function(){            //this ko current context ko refer karne keliye use karte hai
        console.log(`${this.username}, welcome to website`);  
        console.log(this);
    }

}

// user.welcomeMesssage()
// user.username = "sam"  //by this hmlog ne context change kardiya hai
// user.welcomeMesssage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()


const chai = () => {        //arrow function
    let username = "arpit"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//++++++++++++++++++  OR  +++++++++++++++++++

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)  //Agr hmne curly braces ko use kiya toh return likhna padega otherwise no

const addTwo = (num1, num2) => ({username: "arpit"})
console.log(addTwo(3,4));


// const myArray = [2,3,5,2,7]
// myArray.forEach()
