const user = {
    username: "arpit",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from db");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}



// console.log(user.username);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
    this.username  = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    return this
}


const userOne = new User("hitesh", 12, true)
const userTwo = new User("chaiaurcode", 14, false)
console.log(userOne);