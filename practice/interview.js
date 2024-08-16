 //  1)Write a function that takes an array of numbers and returns a new array where each element is doubled.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const doubledNumbers = numbers.map((num) => num * 2 ); //fat arrow

// console.log(doubledNumbers);

//2)Create a function that takes an array of numbers and returns a new array containing only the even numbers

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = numbers.map((num) => num % 2 === 0 ); //fat arrow

// console.log(evenNumbers);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = numbers.filter((num) => num % 2 === 0 ); //fat arrow

// console.log(evenNumbers);


//  3)Implement a function that calculates the sum of all the elements in an array using the reduce function.


// let arr = [2, 3, 7, 9, 5];
// let sum = arr. reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console. log(sum);



// 4)Write a function that finds the maximum value in an array of numbers using the reduce function.

// let arr = [2,3,4,5];
// let result = arr.reduce((max,el) => {
//     if (el>max){
//         return el;
//     }else{
//         return max;
//     }

// });
// console.log(result);

//  5)Implement a function that takes an array of numbers and returns a new array containing only the prime numbers using the filter function.

// const number = [ 1,2,3,4,5,6,7,8,9,10 ];
// const PrimeNumber = number.filter((num) => {
//     for (let i=2; i<num ; i++ ){
//         if(num % i === 0 ){
//             return false
//         }else {
//             return num !== 1 ;
//         }
//     }
// });
// console.log(PrimeNumber);



// 6)Create a function that takes an array of objects and sorts them based on a specified property using the sort function.

// const items = [
//     {name: "Sabarni", age: 25},
//     {name: "Ankita", age: 23},
//     {name: "Riya", age: 25},
// ];
// items.sort((a,b)=>a.value - b.value);
// items.sort((a,b)=>{
//     const nameA = a.name.toUpperCase();
//     const nameB = b.name.toUpperCase();
//     if(nameA < nameB){
//         return -1;
//     }
//     if(nameA > nameB){
//         return 1;
//     }
//     return 0;
// });
// console.log(items[0]);
// console.log(items[1]);
// console.log(items[2]);



//  7)Write a function that removes duplicate values from an array using the filter function.

// let arr = ["apple", "mango", "banana", "banana", "mango", "apple"];
// function removeDuplicates(arr) {
//     return arr.filter((item,index) => arr.indexOf(item) === index);
// }
// console.log(removeDuplicates(arr));


// 8)Write a function that accepts any number of arguments and returns their sum using the rest parameter.
// function sum (...args){
//     return args.reduce((sum, el) => sum +el);
// };
// console.log(sum(1,2,3));


//9)Create a function that takes any number of arguments (numbers) and calculates the average using the rest parameter.

// function avg(...args){
//     let total = 0;
//     for (const arg of args){
//         total += arg;
//     }
//     return total / args.length;
// }
// console.log(avg(2,6));

//10)Implement a function that takes a variable number of arguments and returns the largest number using the rest parameter.

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


/// 13)Edit in array of object  property without changing original array of object.
// let employees_data = [
//     {
//         employee_id: 1,
//         employee_name: "Aman",
//     },
//     {
//         employee_id: 2,
//         employee_name: "Bhargava",
//     },
//     {
//         employee_id: 3,
//         employee_name: "Chaitanya",
//     },
// ];

// const modifiedEmployees = employees_data.map(obj => {
//     if (obj.employee_id === 2) {
//         return { ...obj, employee_name: "rahul" };
//     }
//     return obj;
// });

// console.log(modifiedEmployees);
// console.log(employees_data);

// let success = false;

