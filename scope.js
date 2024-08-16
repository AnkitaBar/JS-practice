///// local scope

// let a = 13;
// function scope(){
//     let a = 15;
//     console.log(a);
// }
// console.log(a);
// scope();


//global scope
// let a = 13;
// function scope(){

//     console.log(a);
// }
// console.log(a);
// scope();




// block scope - use let not var
// function scope(){
//     {
//         let a = 14;
//         console.log(a);
//     }

//     console.log(a);
// }

// scope();

// function getUsers() {
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (!success) {
//         fetch(`https://api.github.com/users`)
//           .then((response) => response.json())
//           .then((users) => resolve(users))
//           .catch((error) => reject(error));
//       } else {
//         reject("Failed to get the user list");
//       }
//     }, 1000);
//   });
// }

// function onFulfilled(users) {
//   console.log(users);
// }

// function onRejected(error) {
//   console.log(error);
// }

// const promise = getUsers();
// console.log(promise);
// promise.then(onFulfilled).catch(onRejected);


// async function nill() {
//     console.log("Enter");
//     const url = "https://api.github.com/users";
//     console.log("Enter1");
//     const response = await fetch(url);
//     console.log("before response");
//     const users = await response.json();
//     console.log("users Resolved");
//     return users;
//     // return "Nill"
//   }
//   console.log("Before Calling Nill");
//   let a = nill();
//   console.log("After Calling Nill");
//   console.log(a);
//   a.then((data) => console.log(data));
//   a.catch((error) => console.log(error));





async function ankita (){
  console.log("enter");
  const url = "https://api.github.com/users";
  console.log("enter1");
  const response = await fetch(url);
  console.log("before responce");
  const users = await response.json();
  console.log("users Resolved");
  return users;
  

}
console.log("before calling ankita");
let a = ankita();
console.log("After Calling Ankita");
console.log(a);
a.then((data) => console.log(data));
a.catch((error) => console.log(error));

