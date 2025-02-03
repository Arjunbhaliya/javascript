let a= undefined
console.log("a=" +typeof(a));

let vin = Number(a) //value in number
console.log(typeof vin);
console.log(vin);

// "99" => 99
// "99abc" => NaN not a no
// true =>1 false =>0
// undefined =>number convertion value is  NaN
//NaN typeof number
 
let b=1
let vinb= Boolean(b)
console.log(vinb)
// 1=>true
// ""=>false  ;"arjun"=>true

let c= 34
let vins = String(c)  
console.log(vins)
console.log(typeof vins);


//opertion
let str1 = "hello"
let str2 = " arjun"
let str3 = str1 + str2
console.log(str3)

console.log("1" +2)
console.log(1 + "2")
console.log(1 + 2+ "2")
console.log("1" +2 + 2)

console.log(+true)
console.log(true);

let x=100
x++
console.log(x)
