function Hello(Name) {
    console.log("Hello "+Name);
}

function sum(a, b){
    return a+b;
}
function sumX(a, b, c = 10){
    return a+b+c;
}
const funk1=(y)=>{
    console.log("I am a arrow function and the value of x is: ", y);
}

let x = sum(73,47);
// console.log()

funk1(53)