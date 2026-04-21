console.log("Hello world");

let d = 10; // only or block
var a = 50; // no doubt, global
var b = 30;
var c = "omg";

console.log(a + b);
console.log("The type of a is",typeof a,".", c, "I found it!");
const a1 = 10;
{
    let d = 20;
    console.log("d is a block cuz' i have changed it inside a block. d =", d);
}

console.log("But globally, d is", d);


//diffrent type of datas
let p = "Nahid Hossain";
let q = 28;
let r = 3.1416;
let x = undefined;
let y = true;
let z = null;

console.log(p,q,r,x,y,z);
console.log(typeof p,typeof q,typeof r,typeof x,typeof y,typeof z);

let details = {
    Name: p,
    age: 14,
    profession: "student",
    earning: 0
}
details.age = 15;
details.gamer = true;
console.log(details);