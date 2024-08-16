// The constructor method in JavaScript is used to create and initialize
//  object created within a class. If a constructor method is not added,
//  then a default constructor should be used.



// class Polygon{
//     constructor(){
//         this.name = "hy";
//     }
// }

// const poly1 = new Polygon();
// console.log(poly1.name);


// class Person {
//     constructor(...name){
//         this.name = name;
//     }

//     introduce() {
//         console.log(`Hello , my name is ${this.name}`);
//     }
// }

// const otto = new Person("Ankita","Bar");
// otto.introduce();


// function Multiplier(a, b) {
//     this.a = a;
//     this.b = b;
    

//     this.multiply = function() {
//       return this.a * this.b;
//     };
// }

// const result = new Multiplier(3, 4);
// console.log(result.multiply()); 


function Div(a, b) {
    this.a = a;
    this.b = b;
    

    this.div = function() {
        return this.a / this.b;
    };
}

const result = new Div(12,4);
console.log(result.div()); 



class Multiply{
    constructor(...numbers){
        this.numbers = numbers.reduce((a,b)=> a * b);
    }
Value(){
    console.log(`The result is ${this.numbers}`);
}
}
const multiply1 = new Multiply(2,2,3,2);
multiply1.Value();