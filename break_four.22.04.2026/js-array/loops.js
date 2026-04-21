let a = [1,32,3,45,5,68,7,343];

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element);
// }

// a.forEach((value,index,array)=>{
//     console.log(value,index,array)
// })

// for (const key in a) {
//     if (!Object.hasOwn(a, key)) continue;
//     const element = a[key];
//     console.log(key, element);
// }

for (const value of a) {
    console.log(value)
}