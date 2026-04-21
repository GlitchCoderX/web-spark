let theName = "";
let adj = {
    first: "Crazy ",
    seacond: "Amazing ",
    third: "Fire ",
    fourth: "New",
    fifth: "Bismillah "
}

let shop = {
    first: "Engine ",
    seacond: "Food ",
    third: "Garments ",
    fourth:"Games ",
    fifth: "Mart "
}

let word = {
    first: "limited ",
    seacond: "Bros ",
    third: "Hub ",
    fourth: "LLC ",
    fifth: "Organization"
}


function objRandom(objName){
    randint = Math.random();
    objLength = Object.keys(objName).length;
    keys = Object.keys(objName);
    division = 1/objLength;
    let i = 0;
    // console.log(objLength, division)
    while (i < objLength) { 
        left = i*division;
        right = (i + 1)*division;
        if(left <= randint && right >= randint){
            return objName[keys[i]];
        }
        i++;
    }
}

theName += objRandom(adj);
theName += objRandom(shop);
theName += objRandom(word);
console.log(theName);
