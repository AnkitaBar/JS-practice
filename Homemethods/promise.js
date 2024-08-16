// let promise = new Promise(function(resolve, reject){
//     let condition = true;
//     if(condition){
//         resolve("Success");
//     }else{
//         reject("Error");
//     }
// });
// promise.then((response)=>  console.log(response));
// promise.catch((error)=> console.log(error));

const getData = async () => {
    let y = await "Hello World";
  console.log(y);
}

console.log(1);
getData();
console.log(2);