let myName = "arpit"

console.log(myName.truelength);

let myHeros = ["IronMan", "Hulk"]

let heroPower = {
    Ironman: "tech",
    Hulk: "strenth",

    getHulkPower: function(){
        console.log(`Hulk power is ${this.Hulk}`);
    }
}

Object.prototype.arpit  = function(){
    console.log(`Arpit is present in all objects`);
}

Array.prototype.heyArpit = function(){
    console.log(`Arpit says hello`);
}

// myHeros.heyArpit()
// // heroPower.heyArpit()
// heroPower.arpit()

//inheritance

const Teacher = { 
    makeVideo: true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

// Teacher.__proto__ = User;

// Modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"arpit".trueLength()
"iceTea".trueLength()