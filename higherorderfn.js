function higherOrderFunction(callback) {

    callback();
  }
  
  function callbackFunction() {
    console.log("Callback function is executed.");
  }
  
  higherOrderFunction(callbackFunction);


// A programming language is said to have First-class functions if functions in that language are treated like other variables. So the functions can be assigned to any other variable or passed as an argument or can be returned by another function

//   A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.
  
//   A JavaScript callback is a function which is to be executed after another function has finished execution
  


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
  
  