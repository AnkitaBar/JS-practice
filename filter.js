// let cities = [
//     {name: 'Los Angeles', population: 3792621},
//     {name: 'New York', population: 8175133},
//     {name: 'Chicago', population: 2695598},
//     {name: 'Houston', population: 2099451},
//     {name: 'Philadelphia', population: 1526006}
//   ];
  
//   let a=cities.filter(function(item){
//     return item.name ==="New York";
//   })
//   console.log(a)


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter(function (num) {
//   return num % 2 === 0;
// });

// console.log(evenNumbers);


// const words = ["apple", "banana", "orange", "pear", "grape"];

// const filteredWords = words.filter(function(word)
// {
//       return word.length === 5;
//     });
    
//     console.log(filteredWords);


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const oddNumbers = numbers.filter(function(num) {
//   return num % 2 !== 0;
// });

// console.log(oddNumbers);


// const people = [
//   { id: 1, name: "John Doe" },
//   { id: 2, name: "Jane Smith" },
//   { id: 3, name: "Bob Johnson" },
//   { id: 4, name: "Alice Brown" },
// ];

// const searchString = "Doe";

// const filteredPeople = people.find((person) =>
//   person.name.includes(searchString)
// );

// console.log(filteredPeople);



// const names = ["John", "Jane", "Tom", "Emily", "Bob"];
// const filteredNames = names.filter(function(name) {
//   return name.includes("o");
// });

// console.log(filteredNames);


let cities = [
  { name: "Los Angeles", population: 3792621 },
  { name: "New York", population: 8175133 },
  { name: "Chicago", population: 2695598 },
  { name: "houston", population: 2099451 },
  { name: "Philadelphia", population: 1526006 },
];

let bigCities = [];

for (let i = 0; i <= cities.length; i++) {
  // console.log(cities.length)
  if (cities[i]?.population > 3000000) {
    bigCities.push(cities[i]);
  }
}

console.log(bigCities);