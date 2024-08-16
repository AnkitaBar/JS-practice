//////////////////////////// Map /////////////////


// let a=[
//     {
//       name:"nill",
//       address:"malda",
//     },
//     {
//       name:"nill",
//       address:"malda",
//     },
//     {
//       name:"nill",
//       address:"malda",
//     }
//   ]
  
//   let b=a.map((item)=>{
//     return item.name
//   })
//   console.log(b)


//////////////////////////// for each ///////////////////////////////////////////

  
//   let a=[
//     {
//       name:"nill",
//       address:"malda",
//     },
//     {
//       name:"nill",
//       address:"malda",
//     },
//     {
//       name:"nill",
//       address:"malda",
//     }
//   ]
  
//   let b=a.forEach((item)=>{
//     return item.name
//   })
//   console.log(b)
  
//   let a=[
//     {
//       name:"nill",
//       address:"malda",
//     },
//     {
//       name:"nill",
//       address:"malda",
//     },
//     {
//       name:"nill",
//       address:"malda",
//     }
//   ]
  
//   a.forEach((item)=>{
//     console.log(item.name)
//   })


let string = "Sabyasachi, web kitters Techno I Sabyasachi";

let words = string.split(/[ ,|]+/);

let wordCount = {};
words.forEach((word)=> {
 
  if (wordCount[word]) {
    wordCount[word]++;
  } else {
    wordCount[word] = 1;
  }
});
console.log(wordCount)

for (let word in wordCount) {
  console.log(`${word}-${wordCount[word]}`);
}