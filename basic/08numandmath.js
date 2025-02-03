
const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3));

const othern= 125.749
console.log(othern.toPrecision(4));

const num = 100000000
console.log(num.toLocaleString('en-IN'));
console.log(num.toLocaleString());

//+++++++Math+++++++
console.log(Math);
console.log(Math.abs(-4));      //abslute value
console.log(Math.round(6.7));
console.log(Math.ceil(3.1));
console.log(Math.floor(8.9));       //.max,min

console.log(Math.random());   // genret value 0-1
console.log((Math.random()*10) +1);
console.log(Math.floor((Math.random()*10) +1));

const min = 1
const max = 100

console.log(Math.floor((Math.random()*(max - min +1))+min));