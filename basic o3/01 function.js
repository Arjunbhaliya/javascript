const myfunction1 = function(){
    console.log("hello Arjun")
}
function myfunction2(){
    console.log("hello Arjun")
}
 myfunction1()   // for reference myfunction is use
 myfunction2()

//  function add(num1,num2){   //perameters
//     console.log(num1+num2)
//  }
//  add(3,4)  //arguments

 function add(num1,num2){   //perameters
    let result = num1 +num2
    return result
    //rreturn num1 + num2
 }
 const result = add(34,43)
 console.log(result)

 function userlogedin(username = "you"){
    if(!username){       //username === undefined
        console.log("please enter your name")
        return
    }
    return `${username} just loged in `
 }
console.log(userlogedin("Arjun"))

function addcartprice(val1 , val2 ,...num1){ // ... rest opertator
        return num1
}
console.log(addcartprice(200,400,1200,600))

const user1 = {
    name :"Arjun",
    product : "tv",
    price : 250000
}
function userinfo(anyobject){
    console.log( `User Name is ${anyobject.name} and pruduct is ${anyobject.product} with price ${anyobject.price} `)
}

//userinfo(user1)
userinfo({
    name : "santosh",
    product : "phone",
    price : 29999
})

const myarray = [300,500,700]
function secondelement(anyarray){
    console.log(anyarray[1])
}
//secondelement(myarray)
secondelement([2000,3500,6000])
