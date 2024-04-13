const accountId = 12344
let accountEmail = "mukulkadal@gmail.com"
var accountPass = 12345
accountCity = "chandighar"
let accountState = "Chandighar"

// accountId = 2 // not allowed

accountEmail = "nehakdal@gmail.com"
accountPass = 212121
accountCity = "Bengaluru"

console.log(accountId);

/* 

Prefer not to use var

because off issue in block scope and functional scope 



*/


console.table([accountId, accountEmail, accountPass, accountCity, accountState])