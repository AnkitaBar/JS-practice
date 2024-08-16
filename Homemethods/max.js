console.log(Math.max(1,2,3,4,5,6));

let num = [34,66,56,90];
let max = Math.max(...num);
console.log(max);


let arr = [[1,2],[3,4],[5,6]];
let newArr = arr.flat();
let maxNum = Math.max(...newArr);
console.log(maxNum);


let maxNumber = Math.max();
console.log(maxNumber); 



let people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 22 },
    { name: "Jim", age: 30 },
    { name: "Jack", age: 28 }
    ];

    let maxAge = Math.max(...people.map(person => person.age));
    console.log(maxAge); 


// math.max : Return the largest of the given numbers//