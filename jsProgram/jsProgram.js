//1 .Write a function that takes a string as input and returns the reverse of the string?

// let arr = ["ankita", "sabarni","tuka","riya"].reverse();
// console.log(arr);
//console.log("the reverse string is : "+arr );

// let a=["ankita", "sabarni","tuka","riya"]
// for(let i=3;i>=0;i--){
// console.log(a[i])
// }

// 2. Write a JavaScript program to remove specified elements from the right of a given array of elements.?

// let a = [1, 2, 3, 4, 5];
// let b = a.slice(0, 3); // {starting index, end+1}
// let o = a.slice(3, 5);
// let c = a.slice(0,2);
// console.log(b); 
// console.log(o);
// console.log(c);

//3 .Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

// function reverse(n)
// {
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }
// console.log(Number(reverse(32243)));



// 4.Write a JavaScript function that checks whether a passed string is a palindrome or not?


// function reverse(n) {

//     let rev_str = "";
//     for (let i = n.length - 1; i >= 0; i--) {
//         rev_str += n[i];
//     }
//     // return reverse string 
//     return rev_str;
// }

// //  function checking string is palindrome or not 
// function is_palindrome(n) {
//     reverse_str = reverse(n);
//     if (reverse_str === n) {
//         console.log("passed string is palindrome ");
//     }
//     else {
//         console.log("passed string is not palindrome")
//     }
// }
// let test = "wow";
// is_palindrome(test);



// 5.Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

// function alphabet(str)
//     {
// return str.split('').sort().join('');
//     }
// console.log(alphabet("webmaster"));


// 6)Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5


// function getVowels(string) {
//     let Vowels = "aAeEiIoOuU";
//     let vowelsCount = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (Vowels.indexOf(string[i]) !== -1) {
//             vowelsCount += 1;
//         }
//     }
//     return vowelsCount;
// }
// console.log(
//     "The Number of vowels in - " +
//         "The quick brown fox: " +
//         getVowels(
//             "The quick brown fox "
//         )
// );


// 7. Write a JavaScript function that accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

// function type (){
//     let a = 10;
//     let b = "string";
//     console.log(typeof(a));
//     console.log(typeof(b));
// }
// type();


// 8)12)Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

// function Second_Greatest_Lowest(arr) {
//     arr.sort(function(a, b) {
//         return a - b; //// assendingorder //// decending b-a
//     });
//     let secondLowest = arr[1];
//     let reversedArr = arr.reverse();
//     let secondGreatest = reversedArr[1];
    
//     return [secondLowest, secondGreatest];
//     }
//     console.log(Second_Greatest_Lowest([1,2,3,4,5]));


// 9)Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the 
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

// // Using a for loop to iterate through numbers from 0 to 15
// for (var x = 0; x <= 15; x++) {
//     // Checking if the current number is 0
//     if (x === 0) {
//         console.log(x + " is even");
//     }
//     // Checking if the current number is even
//     else if (x % 2 === 0) {
//         console.log(x + " is even");
//     }
//     // If the number is not 0 and not even, it is odd
//     else {
//         console.log(x + " is odd");
//     }
// } 


// 10. Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not?

// function findLongestWord(str) {
//     // Split the string into an array of words
//     const words = str.split(' ');

//     // Initialize a variable to keep track of the longest word
//     let longestWord = '';

//     // Iterate over the array of words
//     for (const word of words) {
//         // Update the longest word if the current word is longer
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }

//     // Return the longest word
//     return longestWord;
// }

// // Example usage
// const exampleString = 'Web Development Class';
// console.log(findLongestWord(exampleString)); // Output: 'Development'



// 14. Write a JavaScript conditional statement to find the largest of five numbers

// a=5;
// b=2;
// c=6;
// d= 0;
// f=-1;
// if (a>b && a>c && a>d && a>f)
// {
//     console.log(a);
// }
// else if (b>a && b>c && b>d && b>f)
// {
//     console.log(b);
// }
// else if (c>a && c>b && c>d && c>f)
// {
//     console.log(c);
// }
// else if (d>a && d>c && d>b && d>f)
// {
//     console.log(d);
// }
// else
// {
//     console.log(f);
// }


// 15. Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade

// var students = [['Ankita', 80], ['Sabarni', 77], ['Riya', 88], ['Mantrit', 95], ['Tuktuk', 68]];

// var Avgmarks = 0;

// for (var i=0; i < students.length; i++) {
//         Avgmarks += students[i][1];
//         var avg = (Avgmarks/students.length);
// }

// console.log("Average grade: " + (Avgmarks)/students.length);

//         if (avg < 60){
//             console.log("Grade : F");      
//             } 
//         else if (avg < 70) {
//                 console.log("Grade : D"); 
//                     } 
//         else if (avg < 80) 
//                 {
//                 console.log("Grade : C"); 
//         } else if (avg < 90) {
//                 console.log("Grade : B"); 
//         } else if (avg < 100) {
//                 console.log("Grade : A"); 
// }


// 16 Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". 
// For numbers multiples of both three and five print "FizzBuzz"

// for (let n = 1; n <= 100; n++) {
//     let output = "";
//     if (n % 3 == 0) output += "Fizz";
//     if (n % 5 == 0) output += "Buzz";
//     console.log(output || n);
//     }



// 17) Armstrong numbers


// function isArmstrong(number) {
//     const numStr = number.toString();
//     const numDigits = numStr.length;

//     const sum = [...numStr].reduce((acc, digit) =>
//         acc + Math.pow(parseInt(digit), numDigits), 0);

//     return sum === number;
// }

// console.log(isArmstrong(370));  // Example usage


// 18. Write a JavaScript function to check whether an `input` is an array or not

// function checkArray() {
//     let str = 'This is a string';
//     let num = 25;
//     let arr = [10, 20, 30, 40];

//     let ans = Array.isArray(str);
//     console.log("Output for String: " + ans);

//     ans = Array.isArray(num);
//     console.log("Output for Number: " + ans);

//     ans = Array.isArray(arr);
//     console.log("Output for Array: " + ans);
// }

// checkArray();


// 19. Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8


// var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

// arr1.sort(function(a,b){return a-b});
// console.log(arr1);

