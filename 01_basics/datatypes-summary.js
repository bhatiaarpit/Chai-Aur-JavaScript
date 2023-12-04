  // Primitive

  // 7 Types : String, Number, boolean, null, undefined, Symbol, Bigint
  //
  const score = 100
  const scorevalue = 100.3

  const isLoggedIn = false
  const outsideTemp = null    //typeof = object

  let userEmail;

  const id = Symbol('123')
  const anotherId = Symbol('123')

  console.log(id === anotherId);

  //Reference(Non-primitive)

  //Array, Objects, Functions

  const heros = ["shaktimaan" ,"naagraj" , "doga"];

  let myObj ={
    name: "hitesh",
    age: 22,
  }

  const myFunction = function () {
    console.log("Hello world");
  }

  console.log(typeof heros);



  //******************************************************//

  //Stack(Primitive) , Heap(Non-Primitive)
  //When the stack memory is used we get the copy of the declared variable  

  //we get the reference of the original value when the memory is declared in heap.

  let myYoutubename = "techazuzu"

  let anothername = myYoutubename
  anothername = "arpitbhatia"
  console.log(anothername);
  console.log(myYoutubename);

  let userOne = {
    email: "arpit@google.com"
  
  }

let userTwo = userOne

userTwo.email = "user@google.com"

console.log(userOne.email);
console.log(userTwo.email);