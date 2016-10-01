let myRealAge: number;
myRealAge = 27;
//myRealAge = '27';

// tuples
let address: [number, string] = [4510, "Caminito Cristalino"];
//address = ["string", 99]; //errors

// enum
enum Color{
    Gray,           //0
    Green = 88,     //88
    Blue            //89
}
let myColor: Color = Color.Green;
console.log(myColor);
console.log(Color.Blue);

// any - no errors upon changing type
let car: any = "BMW";
console.log(car);
car = {
    brand: "BMW",
    series: 3
}
console.log(car);

// functions
let myName = "Hans";
function returnMyName(): string{
    //return myRealAge; //errors
    return myName;
}
console.log(returnMyName());

function sayHello(): void{
    //return 10; // errors
    console.log('hello');
}

//argument types
function multiply(val1: number, val2: number): number{
    return val1 * val2;
}
//console.log(multiply(2, 'Max')); //errors
console.log(multiply(2, 3));

// function types
let myMultiply: (a: number, b: number) => number;  //function that takes 2 numbers and returns a number - names don't matter
//myMultiply = sayHello; //errors
//myMultiply(); //errors
myMultiply = multiply;
console.log(myMultiply(5, 2));

// objects
let userData: { name: string, age: number } = {
    name: "Hans",
    age: 25
};
//userData = {};  //errors
// userData = {
//     a: "Hans",
//     b: 25
// }  // still errors - names matter

//complex objects
let complex: { data:number[], output: (all: boolean) => number[] } = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
}

// type alias
type Complex = {
    data:number[], 
    output: (all: boolean) => number[]
}

let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
}
console.log(complex2);

// let complex3: Complex = {
//     name: "Hans"
// }  // errors

// union types
let myRealRealAge: number | string = 27;
myRealRealAge = "27";

// check types
let finalValue = "A string";
//PUT TYPES IN QUOTES
if (typeof finalValue == "number"){
    console.log("Final value is a number");
};

// never - only useful for clarity
// function neverReturns(): never {    // never is different than void - never returns
//     throw new Error('An error!');
// };

// nullable types - typescript compiler flag (stictNullChecks) makes this required
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull; // undefined can be null - if implicit any
canAlsoBeNull = null;
let canNotBeNonnull = null;
// canNotBeNonnull = 12;    //errors - initialized to null does not mean of time any.





