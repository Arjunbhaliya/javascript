const user ={
    username : "Arjun",
    price : 4500,

    welcomeMessage: function(){
        console.log(`${this.username} , welocme to website `)           //This  <= referce the current context
        console.log(this)
    }

}
// user.welcomeMessage()
// user.username = "karan"
// user.welcomeMessage()

console.log(this)           // broweser ke andar globle object is windoW

function insidethis(){
    console.log(this)
}
insidethis()


// const chai = function(){
//     let username = "Arjun"
//     console.log(this.username)
// }
// chai()

const chai = () => {
    let username = "Arjun"
    console.log(this)
}
chai()

// const addtwo = function(num1,num2){
//     return num1+num2                       //eplicit return
// }

//const addtwo = (num1,num2) => num1 + num2     //implicit return   one line code

// const addtwo = (num1,num2) =>( num1 + num2)

const addtwo = (num1,num2) => ({username : "Arjun"})
console.log(addtwo(3,68))

