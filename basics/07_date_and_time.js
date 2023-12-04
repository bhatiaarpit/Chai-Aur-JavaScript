// Dates

let myDate = new Date()
// // console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());

// console.log(typeof myDate);  //object

// let myCreatedDate = new Date (2023,0,23) Mon Jan 23 2023
// let myCreatedDate = new Date (2023, 0, 23, 5, 3)
// let myCreatedDate = new Date ("2023-01-14")
let myCreatedDate = new Date ("01-14-2022")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());


newDate.toLocaleString('default',{
    weekday:"long",
})

