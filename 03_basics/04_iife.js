// Immediately Invoked Function Expressions (IIFE)

(function chai() {  
    //name iife            
console.log(`db connected`);
})();

//global scope ke pollution ko hatane keliye iife function ka use karte haii
//hmlog ko is iife funtion ko end karne keliye semi-colon use karna padta haii


((name) => {    //simple iife
    console.log(`db connected two ${name}`);
})('arpit')
