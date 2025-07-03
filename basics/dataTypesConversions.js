// // Conversion and Operation in JavaScript

// // let score = "33"
// // let score1 = "222abs"
// // let age = 24
// // let date = null

// // console.log(typeof(score));
// // console.log(typeof(score1));
// // console.log(typeof(age));
// // console.log(typeof(date));


// // let score1InNumber = Number(score)
// // console.log(score1InNumber);
// // console.log(typeof(score1InNumber));

// // let valueInNumber = Number(score1)
// // console.log(valueInNumber);
// // console.log(typeof(valueInNumber));


// // let dateInNumber = Number(date)
// // console.log(dateInNumber);
// // console.log(typeof(dateInNumber));




// let isLoggedIn = 0 // Zero and empty strin will convert to false 
// // rather 1 and not empty String will convert to true

// let booleanLoogedIn = Boolean(isLoggedIn)
// console.log(booleanLoogedIn);
// console.log(typeof(booleanLoogedIn));

// let numberInString = String(isLoggedIn)
// console.log(numberInString);
// console.log(typeof(numberInString));


// Hence we can convert any data type to any thing Just We carefull with String to Number 


// Lecture 7 ************ Operations *********************


// let value = 3
// console.log(value);  // Print 3
// let negValue = -value
// console.log(negValue); // Print -3

// console.log(2+2); // 4
// console.log(2-2); // 0
// console.log(2*2); // 4
// console.log(2**3); // 8
// console.log(3%2); // 1

// // Above Will Work As Expected

// Also We Can Add The Stroing as Well 

// let str1 = "Mohd"
// let str2 = "SHUMAIL"

// let str = str1 + str2  // Works as Expected
// console.log(str);
// console.log(str1*str2); // Gives NaN

// console.log("1" + 1);
// console.log("1" + "1");
// console.log("1" + 2 + 1);
// console.log(1 + 2 + "1" );
// console.log(1 + "2" + 1);


// These Results are derived what type of number the first opration will result 
/*
 like in first becoems String there fore we get 11
 second is very obious
 in third also first two gives String then Third Number is Added end result is Strin Addition
 in fourth furst two are number then result is number then total becomes strin = 1+2= 3 and then 3+"1" = 31
 similarly the fift




 **** For Further Enquiry refer ECMA SCRIPT 7.1.1 Primitive
*/



// ************ Some Special Converion ************

// console.log(true);

// let num1, num2, num3

// num1 = num2 = num3 = 2+2
// console.table([num1,num2,num3])


// let gameCounter = 100
// console.log(++gameCounter);
// console.log(gameCounter++);
// console.log(`value is = ${gameCounter}`)

// Prefix and postFix Working

let x = 3;
const y = x++; // first assign then increamnet

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;   // first increament then assign

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"








