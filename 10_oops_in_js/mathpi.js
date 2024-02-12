// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

const chai = {
    name : 'Ginger chai',
    price : 25,
    isAvailable : true,

    orderChai: function(){
        console.log("Chai Nahi Bani");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

Object.defineProperty(chai, 'name',{
    // writable: false,
    enumerable: false 
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);    
    }
}