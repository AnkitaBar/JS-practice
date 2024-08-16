// async function fetchData() {
//     console.log("first execute");
//     const url = "https://api.github.com/users"; 
//     console.log("second execute");
//     let response = await fetch(url)  
//     console.log("third execute");  
//     let parsedData = await response.json();
//     return parsedData;
// }
// console.log("before calling function");
// let a = fetchData();
// console.log("after calling function");
// console.log(a);
// a.then((data)=>console.log(data))
// .catch((error)=>console.log(error))





// const array = [[0, 0, 1], [2, 3, 3], [4, 4, 5]];
// const newArray = [].concat(...array);

// console.log(newArray);


const getData = async () => {
    let y = await "Hello World";
  console.log(y);
}

console.log(1);
getData();
console.log(2);