// let a = [1,2,3,4,5];
// let b = a.pop();
// console.log(b); // return poped element 
// console.log(a);

// let a = [1,2,3,4,5,8]
// let b = a.push(6);
// console.log(b); // return array length
// console.log(a);

// let a=[1,2,3,4,5]
// let b=a.shift()
// console.log(a)
// console.log(b)

// let a=[1,2,3,4,5,6]
// let b=a.unshift(8)
// console.log(b) // return array length
// console.log(a)

// const fruits = ["Banana" , "Orange" , "Apple", "Mango"];
// const b = fruits.toString();
// console.log(b); //converts an array to a string of (comma separated) array values.


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.at(2); //method returns an indexed element from an array.
// console.log(fruit)

// const f = ["Banana" , "Orange" , "Apple", "Mango"];
// const a = ["ankita", "bar"]
// const b = [...f , ...a];
// const c = f.concat(a)
// const d = f.join(a)
// console.log(c)
// console.log(b)
// //console.log(d);

// let a = "ankita"
// let b = "bar"
// let c = [...a , ...b]
// let d = a.split(" ").concat(b)
// console.log(d)
// //console.log(c)

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren)