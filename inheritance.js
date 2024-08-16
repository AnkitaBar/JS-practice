// // // // parent class
// class Person {
//     constructor(name) {
//         this.name = name;
//     }

//     greet() {
//         console.log(`Hello ${this.name}`);
//     }
//     }

//   // inheriting parent class
//     class Student extends Person {}

//     let student1 = new Student("Jack");
// student1.greet();


/////parent class
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
    }

  // inheriting parent class
    class Student extends Person {
    constructor(namee) {
        console.log("Creating student class");

      // call the super class constructor and pass in the name parameter
        super(namee);
        console.log(namee);
    }
    }

    let student1 = new Student("Jack");
    student1.greet();

    // The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.