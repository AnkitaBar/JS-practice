// for(let i=10;i>=0;i--){
//   console.log(i)
// }


// for(let i=0;i<=10;i++){
//   console.log(i)
// }

// let a=[1,2,3,4,5,6,7]
// for(let i=0;i<a.length;i++){
//   console.log(a[i])
// }

// let a=[
//   {
//     name:"nill",
//     address:"malda",
//   },
//   {
//     name:"nill",
//     address:"malda",
//   },
//   {
//     name:"nill",
//     address:"malda",
//   }
// ]
// for(let i=0;i<a.length;i++){
//   console.log(a[i])
// }

// let a=[
//   {
//     name:"nill",
//     address:"malda",
//   },
//   {
//     name:"nill",
//     address:"malda",
//   },
//   {
//     name:"nill",
//     address:"malda",
//   }
// ]
// for(let i=0;i<a.length;i++){
//   console.log(a[i])
// }

// for(let i in a){
//   console.log(i)
//  }


// let a=[
//   {
//     name:"nill",
//     address:"malda",
//   },
//   {
//     name:"nill",
//     address:"malda",
//   },
//   {
//     name:"nill",
//     address:"malda",
//   }
// ]
// // for(let i=0;i<a.length;i++){
// //   console.log(a[i])
// // }

// for(let i in a){
//   console.log(a[i])
// }




let a=[
  {
    name:"nill",
    address:"malda",
  },
  {
    name:"nill",
    address:"malda",
  },
  {
    name:"nill",
    address:"malda",
  }
]
// for(let i=0;i<a.length;i++){
//   console.log(a[i])
// }

for(let i of  a){
  console.log(i)
}




// //#Source https://bit.ly/2neWfJ2 
// const promisify = func => (...args) =>
//   new Promise((resolve, reject) =>
//     func(...args, (err, result) => (err ? reject(err) : resolve(result)))
//   );
// const delay = promisify((d, cb) => setTimeout(cb, d));
// delay(2000).then(() => console.log('Hi!')); // // Promise resolves after 2s