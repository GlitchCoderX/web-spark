let a = "Hello world";
let guy1 = "   Nolan";
let guy2 = "Iqbal";

 console.log(a[6]);

 console.log(a.length);

//  /*insteds of*/ console.log("Both of them is called " + guy1 + " and "+ guy2); //use template literal

console.log(`Both of them is called ${guy1} and ${guy2}`);

let speech = "he said\" I'm Jabir\"" // better to use template literal

console.log(guy1.toUpperCase());
console.log(guy1.toLowerCase());
console.log(guy1.slice(0,3)); 
console.log(guy2.replace("qb", "NAN"))
console.log(guy1.concat(guy2, "hahaha"))
let a2 = guy1.trim();
console.log(a2)