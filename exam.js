// 1)Write a JavaScript program to remove duplicate items from an array

// let arr = ["apple", "mango", "banana","lichi", "banana", "mango", "apple"];
// function remove(arr) {
//     return arr.filter((item,index) => arr.indexOf(item) === index);
// }
// console.log(remove(arr));

// 2)Edit in array of object  property without changing original array of object.

// let item = [
//     {
//         item_id: 1,
//         item_name: "Pen",
//     },
//     {
//         item_id: 2,
//         item_name: "Paper",
//     },
//     {
//         item_id: 3,
//         item_name: "Pencil",
//     },
// ];

// const modifieditem = item.map(obj => {
//     if (obj.item_id === 2) {
//         return { ...obj, item_name: "Eraser" };
//     }
//     return obj;
// });
// console.log(item);
// console.log(modifieditem);

// 3)Implement a function that takes a variable number of arguments and returns the largest number using the rest parameter.

// function max(...args){
//     return args.reduce((max , el)=>{
//         if(max < el){
//             return el;
//         }else {
//             return max;
//         }
//     });
// }
// console.log((max(2,7,4)));


// 4)Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.

// let arr = [2, 0, "ankita", false, NaN, 12, "hi", undefined, "",null];

// function removeFalse(arr) {
//     return arr.filter((val) => val);
// }

// console.log(removeFalse(arr));


// 6)Implement a function that calculates the sum of all the elements in an array using the reduce function.

// const arr = [2, 3, 7, 9, 4];
// const sum = arr.reduce((acc, el) => acc + el, 0); 
// console. log(sum);





// 5)Write a JavaScript program to find the most frequent item in an array.


const array = [1, 2, 3, 2, 2, 3, 1, 4, 2];
const mostFrequent = Array.from(new Set(array)).reduce((prev, curr) =>
array.filter(el => el === curr).length > array.filter(el => el === prev).length ? curr : prev
);
console.log(mostFrequent); 

// 7)Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

function reverse(a)
{
	a = a + "";
	return a.split("").reverse().join("");
}
console.log(Number(reverse(32243)));