
// 20. Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )


// arr = [
//     1, 1, 3, 5, 7, 6, 8, 5, 6, 4,
//     7, 6, 0, 2, 1, 6, 8, 9, 5,
// ];

// arr.sort((a, b) => a - b);
// //console.log(arr)
// let count = 1,
//     max = 0,
//     el;
// console.log(arr);
// for (let i = 1; i < arr.length; ++i) {
//     if (arr[i] === arr[i - 1]) {
//         count++;
//     } else {
//         count = 1;
//     }
//     if (count > max) {
//         max = count;
//         el = arr[i];
//     }
// }
// console.log("The most occured element is: " + el);


// 21. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the 
// output should be 'tHE qUICK bROWN fOX'.

// str = 'c';
// var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var LOWER = 'abcdefghijklmnopqrstuvwxyz';
// var result = [];

//     for(var x=0; x<str.length; x++)
//     {
//     if(UPPER.indexOf(str[x]) !== -1)
//     {
//         result.push(str[x].toLowerCase());
//     }
//     else if(LOWER.indexOf(str[x]) !== -1)
//     {
//         result.push(str[x].toUpperCase());
//     }
//     else 
//     {
//         result.push(str[x]);
//     }
//     }
// console.log(result.join(''));



// 22. Write a JavaScript program that prints the elements of the following array.
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];


// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// // Iterate through each row in the 2-D array
// for (var i in a) {
//    // Output the current row index
//    console.log("row " + i);
   
//    // Iterate through each element in the current row
//    for (var j in a[i]) {
//       // Output the current element value
//       console.log(" " + a[i][j]);
//    }
// }



// 23. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).


// function removeDuplicates(arr) {
//     return arr.filter((value, index, self) => self.indexOf(value) === index);
//     // return arr.filter((value, index, self) => console.log(value));
//   }

//   const array = [1, 2, 2, 3, 4, 4, 5, 6, 6];
//   const p = removeDuplicates(array);

//   console.log(p);


// 24. Write a JavaScript program to find the leap years in a given range of years.

// function isLeapYear(year) {
//     if (
//         year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
//     )
//         console.log(" Input year:", year, "is a Leap Year");
//     else
//         console.log(
//             " Input year:",
//             year,
//             "is NOT a Leap Year"
//         );
// }

// let inputYear = 2020;
// isLeapYear(inputYear);
// inputYear = 2023;
// isLeapYear(inputYear);



// 25. Write a JavaScript program to perform a binary search.
// Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
// Sample array :
// var items = [1, 2, 3, 4, 5, 7, 8, 9];
// Expected Output :
// console.log(binary_Search(items, 1)); //0
// console.log(binary_Search(items, 5)); //4


// function binary_Search(array, target) {
//     let left = 0;
//     let right = array.length - 1;

//     while (left <= right) {
//         let middle = Math.floor((left + right) / 2);
        
//         if (array[middle] === target) {
//             return middle;
//         } else if (array[middle] < target) {
//             left = middle + 1;
//         } else {
//             right = middle - 1;
//         }
//     }

//     return -1; // Return -1 if the target is not found
// }


// var items = [1, 2, 3, 4, 5, 7, 8, 9];

// console.log(binary_Search(items, 1)); // Output: 0
// console.log(binary_Search(items, 5)); // Output: 4
// console.log(binary_Search(items, 6)); // Output: -1
// console.log(binary_Search(items, 7)); // Output: 5


// 26. There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]


// function sumArrays(arr1, arr2) {
//     let result = [];
//     let maxLength = Math.max(arr1.length, arr2.length);

//     for (let i = 0; i < maxLength; i++) {
//         let value1 = arr1[i] || 0;  // Use 0 if arr1[i] is undefined
//         let value2 = arr2[i] || 0;  // Use 0 if arr2[i] is undefined

//         result.push(value1 + value2);
//     }

//     return result;
// }

// let array1 = [1, 0, 2, 3, 4];
// let array2 = [3, 5, 6, 7, 8, 13];

// console.log(sumArrays(array1, array2)); // [4, 5, 8, 10, 12, 13]


// 27. Write a JavaScript program to find duplicate values in a JavaScript array

// let arr = [1,4,5,6,3,4,2,1,8,9];
// let check_duplicate = (array) => {
//     let duplicate_element = []
//     for (num1 in array) {
//         for (num2 in array) {
//             if (num1 === num2) {
//                 continue;
//             }
//             else {
//                 if (array[num1] === array[num2]) {
//                     duplicate_element.push(array[num1]);
//                 }
//             }
//         }
//     }
//     return [...new Set(duplicate_element)];
// }
// console.log(check_duplicate(arr));



// 28. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]


// let arr = [2, 0, "ankita", false, NaN, 12, "hi", undefined, "",null];

// function removeFalse(arr) {
//     return arr.filter((val) => val);
// }

// console.log(removeFalse(arr));



// 29. Write a JavaScript function to sort the following array of objects by title value.

// const people = [
//     { name: "nill", title: "paul" },
//     { name: "jhon", title: "Doe" },
//     { name: "barsha", title: "nandi" },
//     { name: "barsha", title: "dutta"},
//   ];

//   let newPeople = people.sort((a,b)=>
//     a.title.localeCompare(b.title));

//   console.log(newPeople);


// 30. Write a JavaScript function that merges two arrays and removes all duplicate elements.

// function mergeAndRemoveDuplicates(arr1, arr2) {
    
//     const mergedArray = [...arr1, ...arr2];
    

//     const uniqueArray = [...new Set(mergedArray)];
//    // console.log(uniqueArray);
//     return uniqueArray;

// }

// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];
// const result = mergeAndRemoveDuplicates(array1, array2);

// console.log(result); 


// 31. Test data :
// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];
// console.log(merge_array(array1, array2));
// [3, 2, 30, 1]


// function mergeAndRemoveDuplicates(arr1, arr2) {
    
//     const mergedArray = [...arr1, ...arr2];
    

//     const uniqueArray = [...new Set(mergedArray)];
//    // console.log(uniqueArray);
//     return uniqueArray;

// }

// const array1 = [1, 2, 3];
// const array2 = [2, 30, 1];
// const result = mergeAndRemoveDuplicates(array1, array2);

// console.log(result); 

// 31. Test data :
// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];
// console.log(merge_array(array1, array2));
// [3, 2, 30, 1]

// function merge_array(arr1, arr2) {
    
//     let mergedArray = arr1.concat(arr2);
    
//     let uniqueArray = [...new Set(mergedArray)];
    
//     return uniqueArray;
// }

// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];
// console.log(merge_array(array1, array2));


// 32.Write a JavaScript program to reverse the order of characters in the string.


// function reverseString(str) {
//     // Split the string into an array of characters
//     let Str = str.split("").reverse().join("");
    
    
//     return Str;
// }
// let originalStr = "Hello World!";
// let string = reverseString(originalStr);
// console.log(string);


// 34.Write a JavaScript program to convert an asynchronous function to return a promise.

// async function nill() {
//     console.log("Enter");
//     const url = "https://api.github.com/users";
//     console.log("Enter1");
//     const response = await fetch(url);
//     console.log("before response");
//     const users = await response.json();
//     console.log("users Resolved");
//     return users;
//       // return "Nill"
//     }
//     console.log("Before Calling Nill");
//     let a = nill();
//     console.log("After Calling Nill");
//     console.log(a);
//     a.then((data) => console.log(data));
//     a.catch((error) => console.log(error));

// const getData = async () => {
//     let y = await "Hello World";
//     console.log(y);
// }
// getData();
// console.log(1);
// //getData();
// console.log(2);


// 35. Write a JavaScript program that returns the singular or plural form of the word based on the input number

// function pluralize(word, number) {
//     if (number === 1) {
//         return `${number} ${word}`;
//     } else {
//         return `${number} ${word}s`;
//     }
// }
// console.log(pluralize("apple", 1)); 
// console.log(pluralize("apple", 5)); 
// console.log(pluralize("banana", 1)); 
// console.log(pluralize("banana", 2)); 

// function getPluralForm(number, singular, plural = null) {
//     if (number === 1) {
//       return singular;
//     } else {
//       return plural || singular + 's';
//     }
//   }

//   console.log(getPluralForm(1, 'apple'));  
//   console.log(getPluralForm(5, 'apple'));  
//   console.log(getPluralForm(1, 'person', 'people'));  
//   console.log(getPluralForm(3, 'person', 'people')); 


// 36. Write a JavaScript program to perform left-to-right function composition for asynchronous functions.

// 37. Write a JavaScript program to get the minimum value of an array, after mapping each element to a value using the provided function


// function getMinValue(arr, fn) {
//     if (arr.length === 0) {
//     throw new Error("Array must not be empty");
//     }

//     const mappedArr = arr.map(fn);

//     const minValue = Math.min(...mappedArr);

//     return minValue;
// }
// const array = [1, 2, 3, 4, 5];
// const mappingFunction = x => x * 2;

// console.log(getMinValue(array, mappingFunction)); 


// 38. Write a JavaScript program to create an object from the specified object, where all keys are in lowercase

// const lowercaseKeys = obj =>
//     Object.keys(obj).reduce((acc, key) => {
//         acc[key.toLowerCase()] = obj[key];
//         return acc;
//     }, {});
//     const myObj = { Name: 'Adam', sUrnAME: 'Smith' };
//     const myObjLower = lowercaseKeys(myObj);
//     console.log(myObjLower);


////// 39. Write a JavaScript program to check if the given argument is a string.    

    // function isString(arg) {
    //     return typeof arg === 'string';
    //     }
    
    
    // console.log(isString("Hello"));  
    // console.log(isString(123));      
    // console.log(isString({}));       
    // console.log(isString([]));       
    // console.log(isString(null));  
    // console.log(isString(undefined));


    // 40)11). Write a JavaScript program to check if the provided integer is a prime number or is not    


    function checkPrime(num) {
        let i, flag = true;
        for (i = 2; i <= num - 1; i++) {
            if (num % i == 0) {
                flag = false;
                break;
            }
        }
        if (flag == true)
            console.log(num + " is prime");
        else
            console.log(num + " is not prime");
    }
    checkPrime(4);
    checkPrime(5);