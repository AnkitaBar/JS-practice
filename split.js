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











//////////////////////////////////////   sort Array of object /////////////

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


