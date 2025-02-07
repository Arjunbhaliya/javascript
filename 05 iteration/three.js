// for of 

// [" "," "," "]  string inside array 
// [{},{},{}]

const arr = [4,6,2,7,2]

for (const num of arr) {
    console.log(num)    
}
const greetings = "hello world!"
for (const greet of greetings) {
    if(greet == " "){
        
        continue    ;
    }
    console.log(`each char is ${greet}`)
    
}

//MAP

const map = new Map()
map.set('a',"arjun")
map.set('in',"india")
map.set('fr',"france")
console.log(map)