const name = "Arpit"
const repoCount = 50

//console.log(name + repoCount + " Value");

console.log('Hello my name is ${name} and my repo count is ${repocount}');

const gameName = new String ('Arpit_B')

console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);


const newStringOne = "   arpit   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://google.com/arpit%3bhatia"

// console.log(url.replace('%3','-'));

// console.log(url.includes('sundar'));

// console.log(gameName.split('_'));

console.log(gameName.endsWith('B'));