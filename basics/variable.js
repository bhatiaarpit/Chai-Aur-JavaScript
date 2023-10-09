const accountId = 14445
let accountEmail ="arpit@gmail.com"
var accountPassword = "23455"
accountCity = "Jaipur"
let accountState;

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

accountEmail = "bhatia@gmail.com"
accountPassword = "7r483"
accountCity = "lucknow"

console.table([accountEmail, accountPassword, accountCity,accountId]);