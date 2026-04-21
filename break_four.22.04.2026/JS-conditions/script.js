console.log('Hello world');

let age = 15;
let grace = 2;
let x = "true";
let a = 20;
let b = 27;

console.log(age + grace);
console.log(age + grace);
console.log(age - grace);
console.log(age / grace);
console.log(age * grace);
console.log(age % grace);

a += b;
console.log(a) // and so on

if(age > 18){
    console.log("you are a grown man");
}
else{
    console.log("Oh little boy");
}

if(x === true){
    console.log(" asks about the type and value");
}
if(age !== 18){
    console.log("asks about the type and value too");
}
if(age > 18){
    console.log("you are a grown man");
}

let y = 20;
let z = 27;
let p = y>z?(y-z):(z-y);
console.log(p);