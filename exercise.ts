/**
 * TYPES
 */
type BankAccount = {
    money: number,
    deposit: (value: number) => void
}

type BankCustomer = {
    name: string,
    bankAccount: BankAccount,
    hobbies: string[]
}

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number): void{
        this.money += value;
    }
}

let myself = {
    name: "Hans",
    bankAccount: bankAccount,
    hobbies: ["Yoyo", "Video games"]
}

myself.bankAccount.deposit(3000);

console.log(myself);

/**
 * CLASSES
 */
class Car{
    acceleration: number = 0;

    constructor(public name: string){}

    honk(){
        console.log("Tooooot!");
    }

    accelerate(speed: number){
        this.acceleration += speed;
    }
}
let myCar = new Car("Yaris");
console.log(myCar.acceleration);
myCar.accelerate(5);
console.log(myCar.acceleration);

abstract class baseObject{
    public width: number = 0;
    public length: number = 0;
}
class Rectangle extends baseObject{
    constructor(width: number, length: number){
        super();
        this.width = width;
        this.length = length;
    }
    calcSize(){
        return this.width * this.length;
    }
}
let rectangle = new Rectangle(5, 2);
console.log(rectangle.width);
console.log(rectangle.length);
console.log(rectangle.calcSize());

class ExercisePerson{
    private _firstName: string = '';
    
    get firstName(){
        return this._firstName;
    }

    set firstName(name: string){
        this._firstName = name;
    }
}
let exercisePerson = new ExercisePerson();
console.log(exercisePerson.firstName);
exercisePerson.firstName = "Ma";
console.log(exercisePerson.firstName);
exercisePerson.firstName = "Maximilian";
console.log(exercisePerson.firstName);