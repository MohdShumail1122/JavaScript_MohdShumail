const accountId = 123
let userName = "example@gmail.com"
var pwd = "12334"
let state
accountCity = "gurgram"


// accountId = 23
console.log(accountId);

console.table([accountId, userName, pwd,state,  accountCity])

/*
prefer not to use var because of issue in 
Block Scopr and funtional scope

Also dont make without variable without let and const it will work 
*/