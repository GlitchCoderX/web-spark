let a = [1,2,3,7,5,]



// for (let index = 0; index < a.length; index++) {
//     const value = a[index];
//     newarr.push(value**2);
// }
let newarr = a.map((value, index, array)=>{
    return index**2;
})

const GreaterThanThree = (e=>{
    if(e>3){
        return true;
    }
    return false;
})

console.log(newarr)
console.log(a.filter(GreaterThanThree))

const red = (a,b)=>{
    return a+b;
}

console.log(a.reduce(red))

console.log(Array.from("i love to code"))