//////////////// spred operator

// let a = [1,5,6,7,32,3];
// let b = Math.max(...a);
// console.log(b);

// let a = [1,5,6,7,32,3];
// let b = Math.min(...a);
// console.log(b)


// const myVehicle = {
//     brand: "Ford",
//     model: "Mustang",
//     color: "red",
//     };

// const updateMyVehicle = {
//     type: "car",
//     year: 2021,
//     color: "yellow",

//     };

// const MyUpdate = {...myVehicle , ...updateMyVehicle}
// console.log(MyUpdate);

// let a = "Ankita";
// let b =[...a];
// console.log(b);

// let a = ["a","n","k","i","t","a"];
// console.log(...a);

// let t=[1,2,4];
// let s=t;
// s.push(6)
// s=[...t,6]
// // console.log(t)
// console.log(s);


// const object1 = { a: 1, b: { x: 10, y: 20 } };
// const object2 = { b: { z: 30 }, c: 3 };
// const mergedObject = { ...object1 , ...object2 };

// console.log(mergedObject); 

// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers = [...new Set(numbers)];

// console.log(uniqueNumbers);

// Set: Creating a Set from the array automatically removes 
  //duplicate values because Set only stores unique values.


  let a = [1,2,3,5,6,5];
  let b = [1,5,8,3,7,6];
  let c = [1,4,6,7,5,9];

  let s = [...a , ...b, ...c];
  let n = [...new Set(s)];
  console.log(n);