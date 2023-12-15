const userEmail = []

if (userEmail ) {
    // console.log("Got user Email");
} else {
    // console.log("no user Email");
}


//falsy Values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy Values

// "0", 'false', " ", [], {}, function(){}


// if (userEmail.length === 0) {
//     console.log("array is empty");
// }


const emptyObj = {   }
if (Object.keys(emptyObj).length === 0) {
    // console.log("object is empty");
}



// Nullish Coalescing operator (??): null undefined

let val1; 
// val1 = 5 ?? 10
// val1 = null ?? 10

val1 = undefined ?? 15


// console.log(val1);


//Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 90 ? console.log("less than 90") : console.log("more than 90");