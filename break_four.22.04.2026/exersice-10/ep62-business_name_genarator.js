let ForAdj = Math.random();
let ForShop = Math.random();
let ForWord = Math.random();
let Thename = "";

let adj = {
    first: "Crazy ",
    seacond: "Amazing ",
    third: "Fire "
}

let shop = {
    first: "Engine ",
    seacond: "Food ",
    third: "Garments "
}

let word = {
    first: "limited ",
    seacond: "Bros ",
    third: "Hub "
}

//Adj
if(ForAdj <= 0.33){
    Thename+= adj.first;
}
else if(ForAdj <= 0.66 && ForAdj >= 0.34){
    Thename+= adj.seacond;
}
else if (ForAdj <= 1 && ForAdj >= 0.64) {
   Thename+= adj.third;
}

//Shop
if(ForShop <= 0.33){
    Thename+= shop.first;
}
else if(ForShop <= 0.66 && ForShop >= 0.34){
    Thename+= shop.seacond;
}
else if (ForShop <= 1 && ForShop >= 0.64) {
    Thename+= shop.third;
}

//Word
if(ForWord <= 0.33){
    Thename+= word.first;
}
else if(ForWord <= 0.66 && ForWord >= 0.34){
    Thename+= word.seacond;
}
else if (ForWord <= 1 && ForWord >= 0.64) {
    Thename+= word.third;
}

console.log(Thename)