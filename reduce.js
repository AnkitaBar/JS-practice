// const numbers = [175, 50, 25];
// const result = numbers.reduce(myFunc);

// function myFunc(total, num) {
//   return total - num;
// }

// console.log(result);


// const s = ["apple", "banana", "cherry", "date"];
// const t = s.reduce((accu, current) => {
//   accu[current] = current.length;

//   return accu;
// }, {});

// console.log(t);


// const s = ["apple", "banana", "cherry", "date"];
// const result = s.reduce(myFunc);

// function myFunc(total, num) {

//   return total + num;
// }

// console.log(result);



const fruits = ["apple", "banana", "orange", "apple", "banana"];
const a = fruits.reduce((count, fruit) => {
  count[fruit] = (count[fruit] || 0) + 1;
  console.log(count[fruit]);
  return count;
}, {});
console.log(a);