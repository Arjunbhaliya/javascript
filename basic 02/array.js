
const num = [0,1,2,3,4,5]
console.log(num[5])

const colour = new Array("red", "yellow","blue","pinck", "black","white")
console.log(colour)

colour.push("green")     //add at last
console.log(colour)
colour.pop()             //remove from last
console.log(colour)

colour.unshift(101)     //add in start
console.log(colour)
colour.shift()          //remove from start   
console.log(colour)

console.log(num.includes(9))
console.log(num.indexOf(4))

const Newnum = num.join()
console.log(Newnum)

// slice and splice
console.log("a" ,num)
console.log(num.slice(1,3))
console.log("b" ,num)
console.log(num.splice(1,3))
console.log("c" ,num)

// part 2
const mix =num.concat(colour)
console.log(mix)

const newmix = [...num , ...colour]   //spred
console.log(newmix)

const complex = [2,5,[6,9],7,[23,4,[12,89]]]
const easy = complex.flat(Infinity)
console.log(easy)

console.log(Array.isArray("arjun"))
console.log(Array.from("arjun"))        //convert into array

const arjun = 5000
const karan = 4000
const eklavya = 3000
console.log(Array.of(arjun , karan  , eklavya)) // construct