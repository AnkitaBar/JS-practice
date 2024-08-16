// function job() {
//     console.log( new Promise(function (resolve, reject) {
//       resolve();
//     }))
//   }
  
//   let promise = job();
  
//   promise
//     .then(function () {
//       console.log("Success 1");
//     })
  
//     .then(function () {
//       console.log("Success 2");
//     })
  
//     .then(function () {
//       console.log("Success 3");
//     })
  
//     .catch(function () {
//       console.log("Error 1");
//     });




// function job() {
//     return new Promise(function (resolve, reject) {
//       resolve();
//     });
//   }
  
//   let promise = job();
  
//   promise
//     .then(function () {
//       console.log("Success 1");
//     })
  
//     .then(function () {
//       console.log("Success 2");
//     })
  
//     .then(function () {
//       console.log("Success 3");
//     })
  
//     .catch(function () {
//       console.log("Error 1");
//     });



// let success = true;

// function getUsers() {
//   return new Promise((resolve, reject) => {
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
// console.log(promise)
// ;
// promise.then(onFulfilled).catch(onRejected);


//////////////////////////////////////////////////// async await ////////////////////////
async function nill() {
    console.log("Enter");
    const url = "https://api.github.com/user";
    console.log("Enter1");
    const response = await fetch(url);
    console.log("before response");
    const users = await response.json();
    console.log("users Resolved");
    return users;
      // return "Nill"
    }
    console.log("Before Calling Nill");
    let a = nill();
    console.log("After Calling Nill");
    console.log(a);
    a.then((data) => console.log(data));
    a.catch((error) => console.log(error));