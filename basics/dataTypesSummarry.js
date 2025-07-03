//  Primitive DATA Type

/*
They are called by Value rather than refernce

String
Number
Boolean
Null
Undefined. we have declared it but not assign the value
symbol
BigInt. for Bigger values
*/


// *************. Non Primitive *************


/*
They are Call By Refrence
array , Objects , Function
*/

// JS is a Dynamically Typed Language
// unlike Ktlin or typeScript we dont define the type preamptly


// symbol

// const id1 = Symbol('123')
// const id2 = Symbol('123')

// console.log(id1);
// console.log(id2);
// console.log(id1 == id2);
// console.log(id1 === id2);  

// Even though the value looking is same but in actual its not same


// *************. Non Primitive ****************

const heros = ["ironmen", "supermen", "batmen"]
console.log(heros);
console.log(typeof(heros));

let myObject = {
    name: "Shumail",
    age: 23
}

let myFun = function(){
    console.log("hello world");
    
}
console.log(myFun);


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object



