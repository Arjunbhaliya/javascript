
//var c=300
let a = 45      //globlr scope

if(true){
    const a =40     //block scope
    let b = 23
   //c = 24
   console.log("inner :",a)
}
console.log(a)

//++++++++++++++++++ part 2 +++++++++++++++++++

function one(){
    const username = " Arjun "
    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)         //child property perent dont access
    two()

}
one()

if(true){
    const username = "Arjun"
    if(username === "Arjun"){
        const website = "youtube"
        console.log(username + website)
    }
   // console.log(website)
}
//console.log(username)

console.log(addone(5))  //no problem 
function addone(num1){
    return num1+1
}

//console.log(addtwo(5))      //we can't do this
const addtwo =function (num2){
    return num+2
}
console.log(addtwo(5))  
