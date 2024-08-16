// let arr = [
//     {
//         name: "Ankita",
//         email: "abcgmail.com",
//     },
//     {
//         name: "Riya",
//         email: "xyzgmail.com",
//     }
// ];

// const newArr= arr.reduce((accu, cur)=>{
//     accu.push({...cur, Age: 25})
//     return accu;
// } ,[]);

//  console.log(newArr);

// let arr = [
//         {
//             name: "Ankita",
//             email: "abcgmail.com",
//         },
//         {
//             name: "Riya",
//             email: "xyzgmail.com",
//         },
//         {
//             name: "priya",
//             email: "xyzgmail.com",
//         }
//     ];

//     let newArr = {...arr};
//     let last = newArr[arr.length-1];
//     console.log(last);


// let arr = [1, 1, 2, 2, 3, 3, 4, 5, 6,6, 1];
// let check_duplicate = (array) => {
//     let dup_ele = []
//     for (num in array) {
//         for (num2 in array) {
//             if (num === num2) {
//                 continue;
//             }
//             else {
//                 if (array[num] === array[num2]) {
//                     dup_ele.push(array[num]);
//                 }
//             }
//         }
//     }
//     return [...new Set(dup_ele)];
// }

// console.log(check_duplicate(arr));


// function removeDuplicates(arr) {
//     return arr.filter((value, index, self) => self.indexOf(value) === index);
//     // return arr.filter((value, index, self) => console.log(value));
//   }

//   const array = [1, 2, 2, 3, 4, 4, 5, 6, 6];
//   const p = removeDuplicates(array);

//   console.log(p);