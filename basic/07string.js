const name = "arjun"
const otherway = new String("karan-arjun-eklavya")        //as object
console.log(otherway);
const marks = 98
console.log(name + " get " + marks)
console.log(`my name is ${name} . i got ${marks} marks`)//back tek (string interpulation)

console.log(otherway.__proto__);  // toUpperCase(),charAt(),length,subString
console.log(otherway.indexOf('a', 2));

console.log(otherway.slice(0,5));
console.log(otherway.split('-'));

const newname= "   arjun  is  boss  "
console.log(newname.trim())
console.log(newname.replace('is','will be'));
console.log(otherway.substring(0,6))
