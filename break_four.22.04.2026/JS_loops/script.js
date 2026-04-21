let a = 0;
let obj ={
    name : "Nahid",
    age : 15,
    role : "student"
}

for (let i = 0; i < 10; i++) {
    a++; 
    console.log(a);
}

for (const key in obj) {
    const element = obj[key];
    console.log(key,"is ", element)
}

let word = "hello";
for (const letter of word) {
    console.log(letter);
}

let ii= 0;
while (ii < 5) {
    if ( ii < 1){
        console.log("I am", ii);
    }
    else{
        console.log("Now, I am", ii);
    }
    ii++;
}

let iii = 10;
do { // asks the condition later
    console.log(iii)
} while (iii < 10);