//singleton
// object.create

//object literals

const mysym = Symbol("key1")

const jsuser = {
    name : "Arjun",
    [mysym]: "mykey1",          //cant use mysym only alway use [mysym]
    "full name" :"bhaliya ajun",
    age : 20 ,
    location : "gujrat",
    email : "arjun@gmail.com" ,
    islogin : false,
    lastlogin : ["monday", "friday"]
}
 
console.log(jsuser.email)
console.log(jsuser["email"]) // we can't use [email]
console.log(jsuser["full name"]) // we can't use .full name
console.log( jsuser)

jsuser.name = "karan"
//Object.freeze(jsuser)  
jsuser.name = "arjun"   //can't change
console.log(jsuser)

jsuser.greeting = function(){
    console.log("hellow boss");
}
jsuser.greetingtwo = function(){
    console.log(`hello boss ${this.name} `);
}


console.log(jsuser.greeting)   
console.log(jsuser.greeting()) 
console.log(jsuser.greetingtwo()) 

  

