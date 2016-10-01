let myRealAge;
myRealAge = 27;
//myRealAge = '27';
// tuples
let address = [4510, "Caminito Cristalino"];
//address = ["string", 99]; //errors
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 88] = "Green";
    Color[Color["Blue"] = 89] = "Blue"; //89
})(Color || (Color = {}));
let myColor = Color.Green;
console.log(myColor);
console.log(Color.Blue);
// any - no errors upon changing type
let car = "BMW";
console.log(car);
car = {
    brand: "BMW",
    series: 3
};
console.log(car);
// functions
let myName = "Hans";
function returnMyName() {
    //return myRealAge; //errors
    return myName;
}
console.log(returnMyName());
function sayHello() {
    //return 10; // errors
    console.log('hello');
}
//argument types
function multiply(val1, val2) {
    return val1 * val2;
}
//console.log(multiply(2, 'Max')); //errors
console.log(multiply(2, 3));
// function types
let myMultiply; //function that takes 2 numbers and returns a number - names don't matter
//myMultiply = sayHello; //errors
//myMultiply(); //errors
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects
let userData = {
    name: "Hans",
    age: 25
};
//userData = {};  //errors
// userData = {
//     a: "Hans",
//     b: 25
// }  // still errors - names matter
//complex objects
let complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
let complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
console.log(complex2);
// let complex3: Complex = {
//     name: "Hans"
// }  // errors
// union types
let myRealRealAge = 27;
myRealRealAge = "27";
// check types
let finalValue = "A string";
//PUT TYPES IN QUOTES
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
;
// never - only useful for clarity
// function neverReturns(): never {    // never is different than void - never returns
//     throw new Error('An error!');
// };
// nullable types - typescript compiler flag (stictNullChecks) makes this required
let canBeNull = 12;
canBeNull = null;
let canAlsoBeNull; // undefined can be null - if implicit any
canAlsoBeNull = null;
let canNotBeNonnull = null;
// canNotBeNonnull = 12;    //errors - initialized to null does not mean of time any.
