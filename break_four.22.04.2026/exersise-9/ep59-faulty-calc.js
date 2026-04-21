let num1 = prompt("enter your first num to calculate");
let num2 = prompt("enter your seacond num to calculate");
let action = prompt("what action you want to do(+, -, *, /)");
let randint = Math.random();

if (randint < 0.1){
    if(action == "+"){
        console.log(num1-num2);
    }
    else if(action == "-"){
        console.log(num1+num2);
    }
    else if(action == "*"){
        console.log(num1/num2);
    }
    else if(action == "/"){
        console.log(num1*num2);
    }
    else{
        console.log("Something went wrong");
    }
}

else{
        if(action == "+"){
        console.log(num1+num2);
    }
    else if(action == "-"){
        console.log(num1-num2);
    }
    else if(action == "*"){
        console.log(num1*num2);
    }
    else if(action == "/"){
        console.log(num1/num2);
    }
    else{
        console.log("Something went wrong");
    }
}