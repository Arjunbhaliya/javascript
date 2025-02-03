//stack(premitive)   vs heap(reference)
let mycar = "odddi"
let brothercar = mycar
brothercar = "bmw"

console.log(mycar)
console.log(brothercar)


//heap
let arjun= {
    email : "arjun@gmail.com",
    pin : 235,
}
let karan = arjun
console.log(arjun.pin)
console.log(karan.pin);
karan.pin = 989
console.log(arjun.pin)
console.log(karan.pin);