"use strict";// treat all js code as newer version

//alert(3 + 3)  // we are using nodejs, not browser

let name="arjun" // string
let age = 18     //number

/*data type(primitive)
 number
 string
 bigint
 boolean
 null =>standalone value
 undefined => not assign value
 symbol =>unique

 object

*/

console.log(typeof null)        //object
console.log(typeof undefined)   //unefined

const bignumber= 2354092984809240859n
console.log(typeof bignumber)

//reference(non-primitive)
const array =["arjun", "karan","bheem"]
const number =[1, 3,5]
const object ={
    name: "arjun",
    age : 19,
}
const myFunction = function(){
    console.log("hello world")
}
console.log(typeof array)
