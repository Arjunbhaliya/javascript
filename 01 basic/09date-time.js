let mydate = new Date()
console.log(mydate);
console.log(mydate.toDateString());
console.log(mydate.toTimeString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

let mycdate = new Date(2024,4,24,5,34)
console.log(mycdate.toLocaleString());

let timestamp = Date.now()
console.log(timestamp);                    //mili second
console.log(Math.floor(Date.now()/1000));  //second
console.log(mycdate.getTime());

mydate.toLocaleDateString('default',{
    weekday :"long"
})