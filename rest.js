//  rest parameter
// function fun(...input) {
//     let sum = 0;
//     for (let i of input) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(fun(1, 2, 3)); 

// function sum(...arr) {
//     return arr.reduce((accu, num) => accu + num, 0);
// }

// console.log(sum(1, 2, 3, 4,5));


// const subtract = (initial, ...numbers) => {
//     return numbers.reduce((acc, num) => acc - num, initial);
//     };

// console.log(subtract(10, 2, 3)); 
// console.log(subtract(20, 5, 5, 5)); 



// function max(...args){
//     return args.reduce((max , el)=>{
//         if(max < el){
//             return el;
//         }else {
//             return max;
//         }
//     });
// }
// console.log((max(2,7,4)));


// function min(...args){
//     return args.reduce((min , el)=>{
//         if(min > el){
//             return el;
//         }else {
//             return min;
//         }
//     });
// }
// console.log((min(2,7,4)));




// function div(...args){
//     let sortArray = args.sort((a,b)=>(b-a))
//     return sortArray.reduce((a,b)=>{
//         return a-b;
//     })
// }
// console.log(div(6,12,4));

// function sub(...args){
//     let sortArray = args.sort((a,b)=>(b-a))
//     return sortArray.reduce((a,b)=>{
//         return a-b;
//     })
// }
// console.log(sub(6,12,4));

// function sub(...args){
//     let sortArray = args.sort((a,b)=>(b-a))
//     return sortArray.reduce((a,b)=>{
//         return a-b;
//     })
// }
// console.log(sub(6,12,4));




////split

// let text = "Hello every hhh";
// const arr = text.split("");
// console.log(arr);

// let text = "Hello Wveryone";
// const arr = text[2].split("");
// console.log(arr)

// let text = "Hello everyone ffry";
// const arr = text.split(" " , 2);
// console.log(arr);

// const items = "apple, banana, orange, mango";
// const fruits = items.split(", ");
// console.log(fruits);

// const date = "2023-08-04";
// const parts = date.split("-");
// console.log(parts);

// const i = "apple,banana;cherry.date";
// const e = i.split(/[ ,;.]/);
// console.log(e);


// let a = "ankita";
// let b = "bar";
// let c = a.concat(b);
// let d = a+b
// console.log(d)
// console.log(c)

// const people = [
//     { name: "nill", age: 30 },
//     { name: "jhon", age: 25 },
//     { name: "barsha", age: 35 },
//     { name: "barsha", age: 40 },
// ];
//     people.sort((a, b) => {
//     if (a.name < b.name) {
//     return -1;
//     }
//     if (a.name > b.name) {
//     return 1;
//     }
//     return 0;
// });

// console.log(people);

// const people = [
//     { name: "nill", age: 30 },
//     { name: "jhon", age: 25 },
//     { name: "barsha", age: 35 },
//     { name: "barsha", age: 40 },
//   ];

//   let newPeople = people.sort((a,b)=>
//     a.name.localeCompare(b.name));

//   console.log(newPeople);


// The localeCompare method in JavaScript is used to compare two strings in a way that is sensitive to the locale. This method returns a number indicating whether a reference string comes before, after, or is the same as the given string in sort order.

// const people = [
//     { name: "nill", age: 30 },
//     { name: "jhon", age: 25 },
//     { name: "barsha", age: 35 },
//     { name: "barsha", age: 40 },
//     ];

// const uniquePeople = [...new Map(people.map(item => [item.name, item])).values()];

// console.log(uniquePeople);


