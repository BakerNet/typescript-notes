console.log("TESTING CLASSES");

class Person {
    name: string;
    private type: string;
    protected age: number = 25;

    constructor(name: string, public username: string){
        this.name = name;
    }

    printAge(){
        console.log(this.age);
        this.setType("Old Guy");
    }

    private setType(type: string){
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person("Hans", "hmb");
console.log(person.name, person.username);
person.printAge();
//person.setType("Cool Guy"); // errors - setType is private

// Inheritance
class Hans extends Person {
    //when extending a class's constructor, you must always call super(), constructor of parent.
    constructor(){
        super("Hans", "hmb");
    }
}

const person2 = new Hans();
console.log(person2.name, person2.username);
person2.printAge();

class Hans2 extends Person{
    name = "Hans";
}
//name is Hans2 will override constructor of prototypal ancestor (Person)
// main class always overrides parent/super class
const person3 = new Hans2("Michelle", "hmb");
console.log(person3.name, person3.username);
person3.printAge();

