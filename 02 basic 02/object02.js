// const tinderuser = new Object()   //singlton object
const tinderuser = {}    //non-singleton object
tinderuser.id = "123abc"
tinderuser.name = "raj"
tinderuser.islogin = false
console.log(tinderuser)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty("name"))


const user1 = {
    fullname : {
        userfullname : {
            firstname : "Arjun",
            lastname : "Bhaliya"
        }
    },
    age : 20,
}
console.log(user1.fullname.userfullname.firstname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}
//const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1 , ...obj2 , ...obj3}
console.log(obj4)

const users = [
    { id :"234",
        email : "aj@gmial.com"
    },
    { id :"234",
        email : "aj@gmial2.com"
    },
    { id :"234",
        email : "aj@gmial3.com"
    }
]
console.log(users[2].email)

// Object de-structure
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const {name : a} = tinderuser
console.log(a)

const id = Symbol('123')
const anotherId= Symbol("123")
console.log(id === anotherId)


//json
// {
//     "name" : "ramesh",
//     "course" : "js for me",
//     "fees": "444"
// }

[
    {},
    {},
    {}
]


