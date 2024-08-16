// let month = ["january", "february", "march"];
// let newArr = month.sort();  // sort in alphabetical order
// console.log(newArr);


// let num = [5,6,7,2,3,1];
// let arr = num.sort(); // bydefault sort in ascending order
// console.log(arr);


// let a = [45, 77, 3, 9, 10];
// let b = a.sort((a,b) =>(a-b));  // ascending order 
// console.log(b);

// let c = [45, 77, 3, 9, 10];
// let d = a.sort((c,d) =>(d-c));    //descending order
// console.log(b);



let str = "sabarni";
let arr1 = str.split("");
arr1.sort();                     // sort a string //
let sortedArr = arr1.join("");
console.log(sortedArr);



let str1 = "ankita";
let arr2 = str1.split("");
arr2.sort((a,b)=> b.localeCompare(a));  // sort a string in descending order //
let sortedArr1 = arr2.join("");
console.log(sortedArr1);




// sort array of object by their name //
// const people = [
//     { name: "nill", age: 30 },
//     { name: "jhon", age: 25 },
//     { name: "barsha", age: 35 },
//     { name: "barsha", age: 40 },
// ];
  
// let newPeople = people.sort((a,b)=> a.name.localeCompare(b.name));
// console.log(newPeople);




// // sort array of object by their age //
// const people = [
//     { name: "nill", age: 30 },
//     { name: "jhon", age: 25 },
//     { name: "barsha", age: 35 },
//     { name: "barsha", age: 40 },
// ];

// // let newPeople = people.sort((a,b)=> (a.age - b.age));  // ascending order //
// let newPeople = people.sort((a,b)=> (b.age - a.age));     // descending order //
// console.log(newPeople);





  
// The localeCompare method in JavaScript is used to compare two strings //