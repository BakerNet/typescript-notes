console.log("TESTING CLASSES");
/**
 * CLASSES
 */
class Person {
    constructor(name, username) {
        this.username = username;
        this.age = 25;
        this.name = name;
    }
    printAge() {
        console.log(this.age);
        this.setType("Old Guy");
    }
    setType(type) {
        this.type = type;
        console.log(this.type);
    }
}
/**
 * INHERITANCE
 */
const person = new Person("Hans", "hmb");
console.log(person.name, person.username);
person.printAge();
//person.setType("Cool Guy"); // errors - setType is private
// Inheritance
class Hans extends Person {
    //when extending a class's constructor, you must always call super(), constructor of parent.
    constructor() {
        super("Hans", "hmb");
    }
}
const person2 = new Hans();
console.log(person2.name, person2.username);
person2.printAge();
class Hans2 extends Person {
    constructor() {
        super(...arguments);
        this.name = "Hans";
    }
    getType() {
        //console.log(this.type);  // erorors - type is private to Person class
        // private variables are not inherited.  Protected  (and public) variables are.
        //this.setType("Bad Guy");  //errors - same for methods
    }
}
//name is Hans2 will override constructor of prototypal ancestor (Person)
// main class always overrides parent/super class
const person3 = new Hans2("Michelle", "hmb");
console.log(person3.name, person3.username); // Hans hmb
person3.printAge(); // 25
/**
 * GETTERS AND SETTERS
 */
class Plant {
    constructor() {
        this._species = "Default";
    }
    get species() {
        return this._species;
    }
    set species(value) {
        if (value.length > 3) {
            this._species = value;
        }
        else {
            this._species = "Default";
        }
    }
}
let plant = new Plant();
console.log(plant.species); // Default
plant.species = "Conifer";
console.log(plant.species); // Conifer
plant.species = "AB";
console.log(plant.species); // Default
/**
 * STATIC PROPERTIES & METHODS
 */
class Helpers {
    constructor() {
        this.PI = 3.14;
    }
}
//console.log(2 * Helpers.PI)  // errors - can only access PI after initializing
class Helpers2 {
    static calcCircumference(diameter) {
        return this.PI * diameter;
    }
}
Helpers2.PI = 3.14;
// static properties and methods can be called from class itself rather than only objects created from class.
console.log(2 * Helpers2.PI);
console.log(Helpers2.calcCircumference(4));
/**
 * ABSTRACT CLASSES
 */
//cannot be instantiated immediately - must be inherited/extended
class Project {
    constructor() {
        this.projectName = "Default";
    }
    //not abstract - does not need to be overwritten
    calcBudget() {
        return this.budget * 2;
    }
}
class ITProject extends Project {
    // get error if changeName is not implemented.   Abstract methods MUST be implemented.
    changeName(name) {
        this.projectName = name;
    }
    constructor(budget) {
        super();
        this.budget = budget;
    }
}
//let project = new Project(); // errrors - cannot instantiate abstract class
let newProject = new ITProject(400);
console.log(newProject.calcBudget());
newProject.changeName("Super IT Project");
console.log(newProject.projectName);
/**
 * PRIVATE CONSTRUCTORS AND SINGLETONS
 */
// SINGLETON - use of private constructor to only allow one instance of object to be created from class
class OnlyOne {
    constructor(name) {
        this.name = name;
    }
    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
            console.log("One instance created");
        }
        else {
            console.log("Just one instance can be created.");
        }
        return OnlyOne.instance;
    }
}
//let wrong = new OnlyOne('The Only One');  //errors
console.log("Running getInstance");
let right = OnlyOne.getInstance();
console.log(right.name);
console.log("Running getInstance again");
let sameInstance = OnlyOne.getInstance(); // Just one instance can be created
console.log(sameInstance.name);
right.name = 'Something else'; // works.
/**
 * READ ONLY - NOT WORKING ON MY MACHINE
 */
// can use getter without setter to make readonly, or use readonly.  Example:
class OnlyOne2 {
    constructor(name) {
        this.name = name;
    }
    static getInstance() {
        if (!OnlyOne2.instance) {
            OnlyOne2.instance = new OnlyOne2('The Only One 2');
            console.log("One instance created");
        }
        else {
            console.log("Just one instance can be created.");
        }
        return OnlyOne2.instance;
    }
}
let right2 = OnlyOne2.getInstance();
console.log(right2.name);
right2.name = "The next one"; // why does this work?!  It shouldn't but it compiles on my machine...
console.log(right2.name);
class OnlyOne3 {
    constructor(_name) {
        this._name = _name;
    }
    get name() { return this._name; }
    static getInstance() {
        if (!OnlyOne3.instance) {
            OnlyOne3.instance = new OnlyOne3('The Only One 3');
            console.log("One instance created");
        }
        else {
            console.log("Just one instance can be created.");
        }
        return OnlyOne3.instance;
    }
}
let right3 = OnlyOne3.getInstance();
right3.name = "The next one"; // This compiles, but does not change _name property - and right3.name still returns get method.
console.log(right3.name);
class ReadOnly {
    constuctor(name) {
        //this.name = name; // Why does this error?  I am using tyepscript 2.1.0 compiler, and still readonly properties are not working as intended.
    }
}
