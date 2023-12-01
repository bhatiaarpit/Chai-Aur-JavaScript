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